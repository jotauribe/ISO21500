const PreviousInformation = require('../../models/constitution/PreviousInformation.model');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const previousInformation = new PreviousInformation(req.body);
  await previousInformation.save();
  res.send({ message: 'PreviousInformation Created successfully' });
});

const get = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const previousInformation = await PreviousInformation.findOne({
    projectId
  });

  res.send(previousInformation);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const updatedDocument = await PreviousInformation.findOneAndUpdate(
    projectId,
    {
      $set: req.body
    }
  );
  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = { create, get, update };
