const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constitutionSchema = new Schema({
    sponsor: {
        type: String,
        required: [true, 'sponsor obligatory field']
    }, customer: {
        type: String

    }, assignment: {
        type: Boolean

    }, contract: {
        type: Boolean

    }, businessCase: {
        type: Boolean

    }, utterance: {
        type: Boolean

    }, strategicView: {
        type: String,
        required: [true, 'strategic view obligatory field']
    }, descriptionProject: {
        type: String,
        required: [true, ' description obligatory field']
    }, viabilityAnalysis: {
        type: String,
        required: [true, 'viability analysis obligatory field']
    }, generalRequirements: {
        type: String,
        required: [true, 'general requirements obligatory field']

    }, departmentsInvolved: {
        type: String

    }, criticalFactors: {
        type: String

    }, additionalRemarks: {
        type: String,
        required: [true, 'additional remarks obligatory field']
    }, justification: {
        type: String,
        required: [true, 'Justification obligatory field']
    }
});


module.exports = mongoose.model('constitution', constitutionSchema);