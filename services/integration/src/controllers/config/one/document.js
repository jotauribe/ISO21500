const Document = require('../../../models/config/one/document.model');
const Controller = require('../../controller');
const { asyncHandler } = require('../../../utils');

const create = asyncHandler(async (req, res) => {
  const documents = req.body;
  const { projectId } = req;

  Document.insertMany(documents.map(d => ({ ...d, projectId })));

  res.send({ message: 'Document Created successfully' });
});

const find = asyncHandler(async (req, res) => {
  const { projectId } = req;
  const documents = await Document.find({});

  res.send(documents);
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
