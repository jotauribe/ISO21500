const Router = require('express').Router();
const ctr = require('../controllers/project')

Router.get('/:id', ctr.test);

module.exports = Router;