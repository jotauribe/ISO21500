const Objective = require('../../models/constitution/objectives.model');
const Controller = require('../controller');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const objectives = req.body;
  const { projectId } = req;

  Objective.insertMany(objectives.map(o => ({ ...o, projectId })));

  res.send({ message: 'Objectives Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const objective = await Objective.find({});

  res.send(objective);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Objective.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
