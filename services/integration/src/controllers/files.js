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
  const { entityId, type } = req.body || {};

  const a = uploadFile(req, res, async function(err) {
    const { originalname, path, filename } = req.file;

    const file = new File({
      projectId,
      path,
      entityId,
      name: filename,
      originalName: originalname
    });

    await file.save();

    res.send({ message: 'File uploaded', file });
  });
});

module.exports = new Controller({ create });
