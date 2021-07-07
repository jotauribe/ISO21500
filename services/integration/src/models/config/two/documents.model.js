const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  versioningRules: String,
  owner: String
});

module.exports = mongoose.model('config-docs', DocumentSchema);
