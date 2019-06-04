const Router = require('express').Router();
const phases = require('../../controllers/constitution/phases');

Router.post('/', phases.create);
Router.get('/', phases.find);
Router.patch('/:id', phases.update);

module.exports = Router;
