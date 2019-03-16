const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A project title is required']
  },
  director: String
});

module.exports = mongoose.model('Project', projectSchema);
