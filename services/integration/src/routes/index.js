const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution/constitution');

const ObjectiveRouter = require('./constitution/objective');

Router.use('/projects', ProjectRouter);

Router.use('/constitutions' ,ConstitutionRouter);
Router.use('/objectives/constitution' ,ObjectiveRouter);

module.exports = Router;
