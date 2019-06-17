const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riskSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  description: {
    management: { type: String, default: '' },
    estimation: { type: String, default: '' },
    roles: [
      {
        task: { type: String, default: '' },
        assignedTo: { type: String, default: '' }
      }
    ]
  },
  riskAreas: [
    {
      area: { type: String, default: '' },
      time: { type: String, default: '' },
      quality: { type: String, default: '' },
      cost: { type: String, default: '' },
      others: { type: String, default: '' }
    }
  ],
  riskCategories: [
    {
      kind: { type: String, default: '' },
      description: { type: String, default: '' }
    }
  ],
  probabilityLevels: {
    almostTrue: { type: String, default: '' },
    probable: { type: String, default: '' },
    posible: { type: String, default: '' },
    unlikely: { type: String, default: '' },
    rare: { type: String, default: '' }
  },
  budget: { type: String, default: '' },
  protocols: {
    contingency: { type: String, default: '' },
    riskControls: { type: String, default: '' },
    riskComunication: { type: String, default: '' },
    riskPlanAuditory: { type: String, default: '' }
  }
});

module.exports = mongoose.model('risks', riskSchema);
