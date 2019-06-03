const Milstone = require('../../models/constitution/milestone.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const milestone = req.body;
  const { projectId } = req;

  Milstone.insertMany(milestone.map(m => ({ ...m, projectId })));

  res.send({ message: 'Milestones Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const milestone = await Milstone.find({});


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

module.exports = { create, find, update };
