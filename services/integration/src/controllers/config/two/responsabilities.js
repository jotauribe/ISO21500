const Responsabilities = require('../../../models/config/two/responsabilities.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const responsabilities = req.body;
  const { projectId } = req;

  Responsabilities.insertMany(responsabilities.map(r => ({ ...r, projectId })));

  res.send({ message: 'Responsabilities Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const responsabilities = await Responsabilities.find({});

  res.send(responsabilities);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Responsabilities.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
