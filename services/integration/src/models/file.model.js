const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  path: {
    type: String,
    required: [true, 'A file path title is required']
  },
  name: {
    type: String,
    required: [true, 'A file name is required']
  },
  originalName: String,
  type: String,
  entityId: String
});

module.exports = mongoose.model('File', fileSchema);
