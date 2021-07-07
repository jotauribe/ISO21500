const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponsabilitieSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  role: String,
  functions: String
});

module.exports = mongoose.model('responsabilities', ResponsabilitieSchema);
