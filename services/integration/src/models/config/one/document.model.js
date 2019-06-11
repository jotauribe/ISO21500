const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },

  name: String,
  format: String,
  access: String,
  availability: String,
  security: String,
  recovery: String,
  retention: String
});

module.exports = mongoose.model('docuemts', DocumentSchema);
