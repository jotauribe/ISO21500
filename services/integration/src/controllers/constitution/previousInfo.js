const PreviousInfo = require('../../models/constitution/previousInfo.model');
const Controller = require('../controller');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const previousInfo = new PreviousInfo(req.body);
  await previousInfo.save();
  res.send({ message: 'PreviousInfo Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const previousInfo = await PreviousInfo.findOne({
    projectId
  });

  res.send(previousInfo);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const updatedDocument = await PreviousInfo.findOneAndUpdate(projectId, {
    $set: req.body
  });

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
