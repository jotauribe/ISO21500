const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MethodologySchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  communication: String,
  adaptation: String,
  keyAspects: String,
  planRevision: String
});

module.exports = mongoose.model('methodology', MethodologySchema);
