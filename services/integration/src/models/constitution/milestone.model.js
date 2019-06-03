const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  description: String,
  deliverable: String,
  date: String
});

module.exports = mongoose.model('milestone', milestoneSchema);
