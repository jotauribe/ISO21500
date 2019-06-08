const Baselines = require('../../models/planning/baselines.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const baselines = req.body;
  const { projectId } = req;

  Baselines.insertMany(baselines.map(b => ({ ...b, projectId })));

  res.send({ message: 'Baselines Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const baselines = await Baselines.find({});
  res.send(baselines);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Baselines.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = { create, find, update };
