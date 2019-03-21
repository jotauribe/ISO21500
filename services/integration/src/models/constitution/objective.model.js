const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetctiveSchema = new Schema({
  constitutionId: {
    type: String,
    required: [true, 'Constitution Id obligatory field'],

  },
  description: {
    type: String,
    required: [true, 'Description obligatory field']
  },
  objectives: {
    type: String,
    required: [true, 'Objectives obligatory field']
  },
  metric: {
    type: String,
    required: [true, 'Metric obligatory field']
  },
  approvedBy: {
    type: String,
    required: [true, 'Approve obligatory field']
  }
});

module.exports = mongoose.model('objective', objetctiveSchema);