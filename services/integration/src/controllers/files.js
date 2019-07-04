const path = require('path');
const multer = require('multer');
const Router = require('express').Router;
const Controller = require('./controller');
const { asyncHandler } = require('../utils');
const File = require('../models/file.model');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../public/uploads'),
  filename: (req, file, cb) => {
    cb(null, `FILE_${new Date().getTime()}__${file.originalname}`);
  }
});

const uploadFile = multer({
  storage
}).single('file');

const create = asyncHandler(async (req, res) => {
  const { projectId } = req;

  uploadFile(req, res, async function(err) {
    const { originalname, path, filename } = req.file;
    const { entityId, type } = req.body || {};

    const file = new File({
      projectId,
      path,
      entityId,
      type,
      name: filename,
      originalName: originalname
    });

    await File.find({ entityId }).remove();
    await file.save();

    res.send({ message: 'File uploaded', file });
  });
});

const get = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const fileInfo = await File.findOne({ entityId: id });
  const filePath = path.join(
    __dirname,
    `../../public/uploads/${fileInfo.name}`
  );
  res.download(filePath);
});

module.exports = new Controller({ create, get }, '/files');
