const Dcouments = require('../../../models/config/two/documents.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const documents = req.body;
  const { projectId } = req;

  Dcouments.insertMany(documents.map(d => ({ ...d, projectId })));

  res.send({ message: 'Dcouments Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const documents = await Dcouments.find({ projectId });
  res.send(documents);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Dcouments.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
