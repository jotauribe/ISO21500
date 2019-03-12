const Router = require('express').Router();
const ctr = require('../controllers/project');
// ruta por defecto y de prueba 
Router.get('/projects', ctr.test);
//rutas del proyecto

Router.post('/', ctr.createProject);
Router.get('/:id', ctr.getProject);
Router.get('/', ctr.getProjects);
Router.put('/:id/update', ctr.updateProject);
Router.delete('/:id/delete', ctr.deleteProject);

module.exports = Router;