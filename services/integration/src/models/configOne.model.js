const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configOneSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  roles: [
    {
      name: { type: String, default: '' },
      assignedTo: { type: String, default: '' },
      responsibilities: { type: String, default: '' },
      authority: { type: String, default: '' }
    }
  ],
  documents: [
    {
      name: { type: String, default: '' },
      format: { type: String, default: '' },
      access: { type: String, default: '' },
      availability: { type: String, default: '' },
      security: { type: String, default: '' },
      recovery: { type: String, default: '' },
      retention: { type: String, default: '' }
    }
  ],
  items: [
    {
      code: { type: String, default: '' },
      name: { type: String, default: '' },
      category: { type: String, default: '' },
      source: { type: String, default: '' },
      format: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('configOne', configOneSchema);
