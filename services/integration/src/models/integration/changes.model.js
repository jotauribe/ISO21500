const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const changeSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  changes: [
    {
      impacts: {
        scope: { type: String, default: '' },
        costs: { type: String, default: '' },
        time: { type: String, default: '' },
        other: { type: String, default: '' }
      },
      attachedDocumentation: { type: String, default: '' },

      customer: { type: String, default: '' },

      communication: {
        rol: { type: String, default: '' },
        name: { type: String, default: '' },
        date: { type: String, default: '' }
      }
    }
  ]
});

module.exports = mongoose.model('change', changeSchema);
