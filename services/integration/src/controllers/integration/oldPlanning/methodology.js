const Methodology = require('../../../models/integration/oldPlanning/methodology.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const methodology = req.body;
  const { projectId } = req;

  Methodology.insertMany(methodology.map(m => ({ ...m, projectId })));

  res.send({ message: 'Methodology Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const methodology = await Methodology.find({ projectId });
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

module.exports = new Controller({ create, find, update });
