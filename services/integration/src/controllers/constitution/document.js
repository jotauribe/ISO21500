const Document = require('../../models/constitution/document.model');
const Controller = require('../controller');
const { asyncHandler } = require('../../utils');

const create = asyncHandler(async (req, res) => {
  const document = req.body;
  const { projectId } = req;

  Document.insertMany(document.map(d => ({ ...d, projectId })));

  res.send({ message: 'Document Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const document = await Document.find({});
  res.send(document);
});

const update = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const { id } = req.params;
  const updatedDocument = await Document.findOneAndUpdate(
    { projectId, _id: id },
    {
      $set: req.body
    }
  );

  res.send({ message: 'udpated.', updatedDocument });
});

module.exports = new Controller({ create, find, update });
