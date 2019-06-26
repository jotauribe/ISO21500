const Milstone = require('../../../models/integration/constitution/milestone.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const milestone = req.body;
  const { projectId } = req;

  Milstone.insertMany(milestone.map(m => ({ ...m, projectId })));

  res.send({ message: 'Milestones Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const milestone = await Milstone.find({ projectId });

  res.send(milestone);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Milstone.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
