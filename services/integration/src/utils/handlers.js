const _ = require('lodash');
const utils = require('util');
const { isPromise, isAsyncFunction } = utils.types;
const { ObjectId } = require('mongoose').Types;

const self = (module.exports = {
  asyncHandler: fn => (req, res, next) => {
    const errorCatcher = err => self.errorHandler(err, req, res, next);

    if (isPromise(fn) || isAsyncFunction(fn))
      return fn(req, res, next).catch(errorCatcher);

    return Promise.resolve(fn(req, res, next)).catch(errorCatcher);
  },

  errorHandler: (error, req, res, next) => {
    const { response, request } = error;

    if (response) {
      // The server responded with a status code different than 2xx
      res.status(response.status).send(response.data);
    } else if (request) {
      // The request was made but no response was received
      res.status(500).send({ status: 500, message: 'Something went wrong' });
    } else {
      // Something wrong happened in setting up the request
      next(error);
    }
  },
  buildHandlers: function buildHandlersFromModel(Model) {
    return {
      create: self.buildCreateHandler(Model),
      find: self.buildFindHandler(Model),
      update: self.buildUpdateHandler(Model)
    };
  },

  buildFindHandler: Model =>
    self.asyncHandler(async (req, res) => {
      const { projectId } = req;
      const document = await Model.find({ projectId });
      res.send(document);
    }),

  buildCreateHandler: Model =>
    self.asyncHandler(async (req, res) => {
      const document = new Model(req.body);
      await document.save();
      res.send({ message: 'Document Created successfully', document });
    }),

  buildUpdateHandler: Model =>
    self.asyncHandler(async (req, res) => {
      const { projectId } = req;
      const { id } = req.params;
      const riskData = req.body;

      const ARRAY_PROPS = _(Model.schema.paths)
        .pickBy((value, key) => {
          return value.constructor.name === 'DocumentArray';
        })
        .keys()
        .value();

      const PATHS = _.keys(Model.schema.paths);

      const arrayAttributes = _.pick(riskData, ARRAY_PROPS);

      const arrayAttributesData = ARRAY_PROPS.reduce((object, path, index) => {
        object[path] = _.get(arrayAttributes, path);
        _.unset(riskData, path);
        return object;
      }, {});

      const updates = _.mapValues(arrayAttributesData, arr =>
        _.filter(arr, a => _.has(a, '_id'))
      );

      const deletes = _.mapValues(arrayAttributesData, arr =>
        _.filter(arr, item => _.has(item, '$wasDeleted'))
      );

      const newItems = _(arrayAttributesData)
        .mapValues((value, key) => {
          return _.difference(value, _.get(updates, key));
        })
        .value();

      //Removing array attributes
      const docUpdate = PATHS.reduce((object, path, index) => {
        if (_.has(riskData, path)) object[path] = _.get(riskData, path);
        return object;
      }, {});

      //Updating Data
      await Model.findOneAndUpdate({ projectId, _id: id }, docUpdate, {
        omitUndefined: true
      });

      //Inserting new items
      await Model.findOneAndUpdate(
        { projectId, _id: id },
        { $push: newItems },
        { omitUndefined: true }
      );

      //Deleting items
      await Model.findOneAndUpdate(
        { projectId, _id: id },
        { $pullAll: deletes },
        { omitUndefined: true }
      );

      //Updating array items
      const foundDocument = await Model.findById(id);
      _.forOwn(updates, (array, key) => {
        const docArray = _.get(foundDocument, key);

        array.forEach(item => {
          const index = _.findIndex(docArray, function(docItem) {
            if (docItem._id) {
              return ObjectId(docItem._id).equals(item._id);
            }
            return false;
          });
          docArray[index] = {
            ...docArray[index],
            ...item
          };
        });
      });

      await foundDocument.save();

      res.send({
        message: 'Document updated',
        document: foundDocument
      });
    })
});
