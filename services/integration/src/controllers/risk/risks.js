const Risk = require('../../models/risk/risk.model');
const Controller = require('../controller');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const risks = req.body;
  const { projectId } = req;

  Risk.insertMany(risks.map(r => ({ ...r, projectId })));

  res.send({ message: 'Risk Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const risks = await Risk.find({ projectId });
  res.send(risks);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Risk.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
