const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LimitationsSchema = new Schema({
    limitation: {
    type: String,
    required: [true, 'Limitation obligatory field']
  },
  affectTo: {
    type: String,
    required: [true, 'Affect to obligatory field']
  },
  valuation: {
    type: String,
    required: [true, 'Valuation to obligatory field']
  }
});

module.exports = mongoose.model('limitation', LimitationsSchema);