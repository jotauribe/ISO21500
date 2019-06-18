const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planningSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  processes: [
    {
      phase: { type: String, default: '' },
      process: { type: String, default: '' },
      entries: { type: String, default: '' },
      outputs: { type: String, default: '' },
      dependencies: { type: String, default: '' },
      status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
      }
    }
  ],
  methodology: [
    {
      communication: { type: String, default: '' },
      adaptation: { type: String, default: '' },
      keyAspects: { type: String, default: '' },
      planRevision: { type: String, default: '' }
    }
  ],
  baselines: {
    schedule: {
      name: { type: String, default: '' },
      schedule: { type: String, default: '' },
      variationTreshold: { type: String, default: '' },
      controlTracing: { type: String, default: '' }
    },
    costs: {
      name: { type: String, default: '' },
      schedule: { type: String, default: '' },
      variationTreshold: { type: String, default: '' },
      controlTracing: { type: String, default: '' }
    },
    scope: {
      name: { type: String, default: '' },
      schedule: { type: String, default: '' },
      variationTreshold: { type: String, default: '' },
      controlTracing: { type: String, default: '' }
    },
    quality: {
      name: { type: String, default: '' },
      schedule: { type: String, default: '' },
      variationTreshold: { type: String, default: '' },
      controlTracing: { type: String, default: '' }
    }
  }
});

module.exports = mongoose.model('planning', planningSchema);
