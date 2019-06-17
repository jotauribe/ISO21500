const _ = require('lodash');
const Risk = require('../../models/risk/risk.model');
const Controller = require('../controller');
const { asyncHandler } = require('../../utils');
const { ObjectId } = require('mongoose').Types;

const ARRAY_PROPS = _(Risk.schema.paths)
  .pickBy((value, key) => {
    return value.constructor.name === 'DocumentArray';
  })
  .keys()
  .value();

const PATHS = _.keys(Risk.schema.paths);

const create = asyncHandler(async (req, res) => {
  const risks = new Risk(req.body);
  await risks.save();
  res.send({ message: 'Risk Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const risks = await Risk.find({ projectId });
  res.send(risks);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const riskData = req.body;

  const arrayAttributes = _.pick(riskData, ARRAY_PROPS);

  const arrayAttributesData = ARRAY_PROPS.reduce((object, path, index) => {
    object[path] = _.get(arrayAttributes, path);
    _.unset(riskData, path);
    return object;
  }, {});

  const updates = _.mapValues(arrayAttributesData, arr =>
    _.filter(arr, a => _.has(a, '_id'))
  );

  const newItems = _(arrayAttributesData)
    .mapValues((value, key) => {
      return _.difference(value, _.get(updates, key));
    })
    .value();

  const news = {};
  _.forOwn(newItems, (element, path) => {
    _.setWith(news, path, element, Object);
  });

  //Removing array attributes
  const riskUpdate = PATHS.reduce((object, path, index) => {
    if (_.has(riskData, path)) object[path] = _.get(riskData, path);
    return object;
  }, {});

  //Updating Data
  await Risk.findOneAndUpdate({ projectId, _id: id }, riskUpdate, {
    omitUndefined: true
  });

  //Inserting new items
  await Risk.findOneAndUpdate(
    { projectId, _id: id },
    { $push: newItems },
    { omitUndefined: true }
  );

  //Updating array items

  const riskDocument = await Risk.findById(id);
  _.forOwn(updates, (array, key) => {
    const docArray = _.get(riskDocument, key);

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

  await riskDocument.save();

  res.send({
    message: 'udpated.',
    riskDocument
  });
});

module.exports = Controller.fromModel(Risk);
