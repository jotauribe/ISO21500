const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigItemSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  code: String,
  name: String,
  category: String,
  source: String,
  format: String
});

module.exports = mongoose.model('confiItems', ConfigItemSchema);
