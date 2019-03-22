const Objective = require('../../models/constitution/objective.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const objective = new Objective(req.body);
  await objective.save();
  res.send({ message:'objective Created successfully'});
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const objective = await Objective.findOne({constitutionId:id});
  res.send(objective);
});

const find = asyncHandler(async (req, res) => {
  const objective = await Objective.find({});

  res.send( objective );
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedObjective = await Objective.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Objective udpated', updatedObjective });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Ojective.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = { create, get, find, remove, update };
