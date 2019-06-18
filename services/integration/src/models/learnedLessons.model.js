const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const learnedLessonsSchema = new Schema({
  projectId: {
    type: String,
    required: [true, 'ProjectId is a required field']
  },
  lessonsLearned: [
    {
      name: { type: String, default: '' },
      objective: { type: String, default: '' },
      description: { type: String, default: '' },
      report: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('learnedLessons', learnedLessonsSchema);
