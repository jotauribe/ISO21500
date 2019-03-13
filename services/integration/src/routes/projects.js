const Router = require('express').Router();
const project = require('../controllers/project');

Router.post('/', project.create);
Router.get('/:id', project.getOne);
Router.get('/', project.getAll);
Router.put('/:id/update', project.update);
Router.delete('/:id/delete', project.deleteOne);

module.exports = Router;