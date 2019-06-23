const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

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
      email: { type: String, default: '', unique: true },
      nitOrCc: { type: String, default: '', unique: true }
    }
  ]
});

providerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('providers', providerSchema);
