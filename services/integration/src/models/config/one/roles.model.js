const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  assignedTo: String,
  responsibilities: String,
  authority: String
});

module.exports = mongoose.model('roles', RolSchema);
