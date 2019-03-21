const Router = require('express').Router();
const acquisition = require('../controllers/acquisition');

Router.post('/', acquisition.create);
Router.get('/:projectId', acquisition.get);
Router.get('/', acquisition.find);
Router.put('/:id', acquisition.update);
Router.delete('/:id', acquisition.remove);

module.exports = Router;