const Router = require('express').Router();
const document = require('../../controllers/constitution/document');

Router.post('/', document.create);
Router.get('/', document.find);
Router.patch('/:id', document.update);

module.exports = Router;
