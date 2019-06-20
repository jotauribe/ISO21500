const learnedLessons = require('../../models/integration/learnedLessons.model');
const Controller = require('../controller');

module.exports = Controller.fromModel(learnedLessons);
