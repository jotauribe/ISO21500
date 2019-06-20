const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phaseSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  description: String,
  milestone: String,
  date: Date
});

module.exports = mongoose.model('phases', phaseSchema);
