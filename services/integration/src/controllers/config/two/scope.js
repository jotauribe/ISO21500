const Scopes = require('../../../models/config/two/scope.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const scopes = req.body;
  const { projectId } = req;

  Scopes.insertMany(scopes.map(s => ({ ...s, projectId })));

  res.send({ message: 'Scopes Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const scopes = await Scopes.find({ projectId });

  res.send(scopes);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Scopes.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
