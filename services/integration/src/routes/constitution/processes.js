const Router = require('express').Router();
const processes = require('../../controllers/constitution/processes');

Router.post('/', processes.create);
Router.get('/', processes.find);
Router.patch('/:id', processes.update);

module.exports = Router;
