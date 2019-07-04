const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamManagementSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  teamOrganization: String,
  goals: {
    scopeGoals: {
      goals: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    qualityGoals: {
      goals: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    planningGoals: {
      goals: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    budgetGoals: {
      goals: { type: String, default: '' },
      comments: { type: String, default: '' }
    }
  },
  interpersonalSkills: {
    leadership: {
      indicators: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    communication: {
      indicators: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    teamWork: {
      indicators: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    decisions: {
      indicators: { type: String, default: '' },
      commets: { type: String, default: '' }
    },
    conflictManagement: {
      indicators: { type: String, default: '' },
      comments: { type: String, default: '' }
    },
    assertiveness: {
      indicators: { type: String, default: '' },
      comments: { type: String, default: '' }
    }
  },
  personalPlan: {
    justification: { type: String, default: '' },
    strengths: { type: String, default: '' },
    improvementArea: { type: String, default: '' }
  }
});

module.exports = mongoose.model('teamManagement', teamManagementSchema);
