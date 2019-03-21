const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution/constitution');

Router.use('/projects', ProjectRouter);
Router.use('/constitution/projects' ,ConstitutionRouter);

module.exports = Router;
