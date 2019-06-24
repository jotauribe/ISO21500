const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field'],
    unique: true,
    dropDups: true,
    index: true
  },
  providers: [
    {
      name: { type: String, default: '' },
      address: { type: String, default: '' },
      serviceType: { type: String, default: '' },
      phone: { type: String, default: '' },
      email: { type: String, default: '' },
      nitOrCc: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('providers', providerSchema);
