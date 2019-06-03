const Router = require('express').Router();
const milestone = require('../../controllers/constitution/milestone');

Router.post('/', milestone.create);
Router.get('/', milestone.find);
Router.patch('/:id', milestone.update);

module.exports = Router;
