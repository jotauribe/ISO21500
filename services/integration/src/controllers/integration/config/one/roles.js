const Roles = require('../../../../models/integration/config/one/roles.model');
const Controller = require('../../../controller');
const { asyncHandler } = require('../../../../utils');

const create = asyncHandler(async (req, res) => {
  const roles = req.body;
  const { projectId } = req;

  Roles.insertMany(roles.map(r => ({ ...r, projectId })));

  res.send({ message: 'Roles Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const roles = await Roles.find({ projectId });

  res.send(roles);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Roles.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
