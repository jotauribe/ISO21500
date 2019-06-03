const PreviousInfo = require('../../models/constitution/previousInfo.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const previousInfo = new PreviousInfo(req.body);
  await previousInfo.save();
  res.send({ message: 'PreviousInfo Created successfully' });
});

const get = asyncHandler(async (req, res) => {
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

module.exports = { create, get, update };
