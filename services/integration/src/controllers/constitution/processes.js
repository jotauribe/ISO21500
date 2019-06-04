const Processes = require('../../models/constitution/processes.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const procesess = req.body;
  const { projectId } = req;

  Processes.insertMany(procesess.map(p => ({ ...p, projectId })));

  res.send({ message: 'Processes Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const procesess = await Processes.find({});
  res.send(procesess);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Processes.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = { create, find, update };
