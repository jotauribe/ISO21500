const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constitutionSchema = new Schema({
  sponsor: {
    type: String,
    required: [true, 'sponsor obligatory field']
  },
  customer: String,

  assignment: Boolean,

  contract: Boolean,

  businessCase: Boolean,

  utterance: Boolean,

  strategicView: {
    type: String,
    required: [true, 'strategic view obligatory field']
  },
  descriptionProject: {
    type: String,
    required: [true, 'description obligatory field']
  },
  viabilityAnalysis: {
    type: String,
    required: [true, 'viability analysis obligatory field']
  },
  generalRequirements: {
    type: String,
    required: [true, 'general requirements obligatory field']
  },
  departmentsInvolved: String,

  criticalFactors: String,

  additionalRemarks: {
    type: String,
    required: [true, 'additional remarks obligatory field']
  },
  justification: {
    type: String,
    required: [true, 'Justification obligatory field']
  }
});

module.exports = mongoose.model('constitution', constitutionSchema);
