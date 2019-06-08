const Methodology = require('../../models/planning/methodology.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const methodology = req.body;
  const { projectId } = req;

  Methodology.insertMany(methodology.map(m => ({ ...m, projectId })));

  res.send({ message: 'Methodology Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const methodology = await Methodology.find({});
  res.send(methodology);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Methodology.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = { create, find, update };
