const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const previousInformationSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'Project Id obligatory field'],
    unique: true
  },
  description: {
    type: String,
    required: [true, ' Description is obligatory field']
  },
  vision: {
    type: String,
    required: [true, 'Vision obligatory field']
  },
  viability: {
    type: String,
    required: [true, 'Viability obligatory field']
  },
  requirements: {
    type: String,
    required: [true, 'Requirements obligatory field']
  },
  client: {
    name: { type: String, required: [true, 'Name Client obligatory field'] },
    sponsor: { type: String, required: [true, 'sponsor obligatory field'] },
    director: { type: String, required: [true, 'director obligatory field'] }
  }
});

module.exports = mongoose.model(
  'previousInformation',
  previousInformationSchema
);
