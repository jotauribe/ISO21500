const Router = require('express').Router();
const project = require('../controllers/project');

Router.post('/', project.create);
Router.get('/:id', project.get);
Router.get('/', project.find);
Router.put('/:id', project.update);
Router.delete('/:id', project.remove);

module.exports = Router;