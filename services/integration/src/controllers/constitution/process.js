const Process = require('../../models/constitution/process.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const procesess = req.body;
  const { projectId } = req;

  Process.insertMany(procesess.map(p => ({ ...p, projectId })));

  res.send({ message: 'Process Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const procesess = await Process.find({});
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

module.exports = { create, find, update };
