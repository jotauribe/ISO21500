const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const previousInformationSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field'],
    unique: true
  },
  description: {
    type: String,
    required: [true, ' Description is a required field']
  },
  vision: {
    type: String,
    required: [true, 'Vision is a required field']
  },
  viability: {
    type: String,
    required: [true, 'Viability is a required field']
  },
  requirements: {
    type: String,
    required: [true, 'Requirements is a required field']
  },
  client: {
    name: { type: String, required: [true, 'Name Client is a required field'] },
    sponsor: { type: String, required: [true, 'sponsor is a required field'] },
    director: { type: String, required: [true, 'director is a required field'] }
  }
});

module.exports = mongoose.model('previousInfo', previousInformationSchema);
