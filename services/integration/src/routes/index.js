const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution');

Router.use('/projects', ProjectRouter);
Router.use('/projects', ConstitutionRouter);

module.exports = Router;
