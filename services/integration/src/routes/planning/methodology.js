const Router = require('express').Router();
const methodology = require('../../controllers/planning/methodology');

Router.post('/', methodology.create);
Router.get('/', methodology.find);
Router.patch('/:id', methodology.update);

module.exports = Router;
