const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectiveSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  description: String,
  approvableBy: String,
  acceptanceCriteria: String,
  id: { type: String, unique: true }
});

module.exports = mongoose.model('objectives', objectiveSchema);
