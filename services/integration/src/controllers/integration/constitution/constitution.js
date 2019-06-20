const Constitution = require('../../../models/integration/constitution/constitution.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  res.send({ message: 'Operation not supported' });
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const actOfConstitution = await Constitution.findById(id);
  res.send(actOfConstitution);
});

const find = asyncHandler(async (req, res) => {
  res.send({ message: 'Operation not supported' });
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedDocument = await Constitution.findByIdAndUpdate(id, {
    $set: req.body
  });

  res.send({ message: 'Document udpated.', updatedDocument });
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Constitution.findByIdAndRemove(id);

  res.send({ message: 'Deleted successfully!' });
});

module.exports = new Controller({ create, get, find, remove, update });
