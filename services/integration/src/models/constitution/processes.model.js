const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const processesSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  phase: String,
  process: String,
  entries: String,
  outputs: String,
  dependencies: String,
  status: ['open', 'closed']
});

module.exports = mongoose.model('processes', processesSchema);
