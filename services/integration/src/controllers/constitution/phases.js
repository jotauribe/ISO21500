const Phases = require('../../models/constitution/phases.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const phases = req.body;
  const { projectId } = req;

  Phases.insertMany(phases.map(p => ({ ...p, projectId })));

  res.send({ message: 'Phases Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const phases = await Phases.find({});
  res.send(phases);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Phases.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = { create, find, update };
