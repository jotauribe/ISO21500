const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScopeSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  description: String
});

module.exports = mongoose.model('scopes', ScopeSchema);
