const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configTwoSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  scope: { type: String, default: '' },
  deliverables: [
    {
      name: { type: String, default: '' },
      versioningRules: { type: String, default: '' },
      owner: { type: String, default: '' }
    }
  ],
  responsibilities: [
    {
      role: { type: String, default: '' },
      functions: { type: String, default: '' }
    }
  ],
  documents: [
    {
      name: { type: String, default: '' },
      versioningRules: { type: String, default: '' },
      owner: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('configTwo', configTwoSchema);
