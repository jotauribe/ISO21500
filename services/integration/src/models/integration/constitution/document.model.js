const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  name: String,
  description: String
});

module.exports = mongoose.model('document', documentSchema);
