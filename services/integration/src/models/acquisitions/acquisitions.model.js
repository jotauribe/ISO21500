const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const acquisitionSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field'],
    unique: true,
    dropDups: true,
    index: true
  },
  acquisitions: [
    {
      kind: { type: String, default: '' },
      name: { type: String, default: '' },
      quantity: { type: String, default: '' },
      comments: { type: String, default: '' },
      price: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('acquisition', acquisitionSchema);
