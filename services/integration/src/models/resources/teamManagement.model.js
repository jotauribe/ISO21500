const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamMembersSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },

  goals: {
    scopeGoals: {
      goals: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    qualityGoals: {
      goals: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    planningGoals: {
      goals: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    budgetGoals: {
      goals: { type: String, default: '' },
      commets: { type: String, default: '' }
    }
  },

  interpersonalSkills: {
    leadership: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    communication: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    teamWork: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    decisions: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    conflictManagement: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    assertiveness: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    }
  },
  personalPlan: {
    justification: { type: String, default: '' },
    strongholds: { type: String, default: '' },
    improvementArea: { type: String, default: '' }
  }
});

module.exports = mongoose.model('teamManagement', teamMembersSchema);
