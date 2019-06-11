const ConfigItems = require('../../../models/config/one/config-items.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const configItems = req.body;
  const { projectId } = req;

  ConfigItems.insertMany(configItems.map(c => ({ ...c, projectId })));

  res.send({ message: 'ConfigItems Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const configItems = await ConfigItems.find({});

  res.send(configItems);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await ConfigItems.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
