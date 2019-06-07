const Router = require('express').Router();
const process = require('../../controllers/constitution/process');

Router.post('/', process.create);
Router.get('/', process.find);
Router.patch('/:id', process.update);

module.exports = Router;
