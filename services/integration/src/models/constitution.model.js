const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let constitutionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Obligatory field']
  }
});

module.exports = mongoose.model('Constitution', constitutionSchema);
