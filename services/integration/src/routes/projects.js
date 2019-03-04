const Router = require('express').Router();
const ctr = require('../controllers/project')
// ruta por defecto y de prueba 
Router.get('/projects', ctr.test);
//rutas del proyecto

Router.post('/', ctr.createProject);


module.exports = Router;