const Process = require('../../../models/integration/constitution/process.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const procesess = req.body;
  const { projectId } = req;

  Process.insertMany(procesess.map(p => ({ ...p, projectId })));

  res.send({ message: 'Process Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const procesess = await Process.find({ projectId });
  res.send(procesess);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Process.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
