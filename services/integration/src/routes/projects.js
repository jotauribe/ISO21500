const Router = require('express').Router();
const ctr = require('../controllers/project')

Router.get('/projects', ctr.test);

module.exports = Router;