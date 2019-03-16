const Router = require('express').Router();
const project = require('../controllers/project');

Router.get('/', project.find);
Router.get('/:id', project.get);
Router.post('/', project.create);
Router.put('/:id', project.update);
Router.delete('/:id', project.remove);

module.exports = Router;
