const Router = require('express').Router();
const baselines = require('../../controllers/planning/baselines');

Router.post('/', baselines.create);
Router.get('/', baselines.find);
Router.patch('/:id', baselines.update);

module.exports = Router;
