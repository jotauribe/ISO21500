const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  teams: [
    {
      name: { type: String, default: '' },
      rol: { type: String, default: '' },
      responsibilities: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('team', teamSchema);
