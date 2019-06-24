const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamMembersSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  teamMembers: [
    {
      name: { type: String, default: '' },
      lastName: { type: String, default: '' },
      rol: { type: String, default: '' },
      department: { type: String, default: '' },
      email: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('teamMembers', teamMembersSchema);
