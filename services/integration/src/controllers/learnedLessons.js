const learnedLessons = require('../models/learnedLessons.model');
const Controller = require('./controller');

module.exports = Controller.fromModel(learnedLessons);
