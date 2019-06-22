const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  resources: [
    {
      kind: { type: String, default: '' },
      name: { type: String, default: '' },
      quantity: { type: String, default: '' },
      commets: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('resources', resourceSchema);
