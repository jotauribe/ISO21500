const Router = require('express').Router();
const project = require('../controllers/project');

Router.post('/', project.create);
Router.get('/:id', project.getOne);
Router.get('/', project.getAll);
Router.put('/:id', project.update);
Router.delete('/:id', project.deleteOne);

module.exports = Router;