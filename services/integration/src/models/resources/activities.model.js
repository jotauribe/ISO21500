const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  activities: [
    {
      name: { type: String, default: '' },
      description: { type: String, default: '' },
      status: { type: String, default: '' }
    }
  ],
  problemsForNextPeriod: { type: String, default: '' },
  identifiedRisk: [
    {
      risk: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('activities', activitySchema);
