const Deliverables = require('../../../models/config/two/deliverables.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const deliverables = req.body;
  const { projectId } = req;

  Deliverables.insertMany(deliverables.map(d => ({ ...d, projectId })));

  res.send({ message: 'Deliverables Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const deliverables = await Deliverables.find({ projectId });

  res.send(deliverables);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Deliverables.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
