const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const previousInformationSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field'],
    unique: true
  },
  description: {
    type: String
  },
  vision: {
    type: String
  },
  viability: {
    type: String
  },
  requirements: {
    type: String
  },
  client: {
    name: { type: String },
    sponsor: { type: String },
    director: { type: String }
  }
});

module.exports = mongoose.model('previousInfo', previousInformationSchema);
