const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riskSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  description: {
    management: String,
    estimation: String,
    roles: [{ task: String, assignedTo: String }]
  },
  riskAreas: [
    {
      area: String,
      time: String,
      quality: String,
      cost: String,
      others: String
    }
  ],
  riskCategories: [
    {
      kind: String,
      description: String
    }
  ],
  probabilityLevels: {
    almostTrue: String,
    probable: String,
    posible: String,
    unlikely: String,
    rare: String
  },
  budget: String,
  protocols: {
    contingency: String,
    riskControls: String,
    riskComunication: String,
    riskPlanAuditory: String
  }
});

module.exports = mongoose.model('risks', riskSchema);
