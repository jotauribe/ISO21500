const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaselinesSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  schedule: String,
  variationTreshold: String,
  controlTracing: String
});

module.exports = mongoose.model('baselines', BaselinesSchema);
