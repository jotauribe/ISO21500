const Router = require('express').Router();
const objectives = require('../../controllers/constitution/objectives');

Router.post('/', objectives.create);
Router.get('/', objectives.find);
Router.patch('/:id', objectives.update);

module.exports = Router;
