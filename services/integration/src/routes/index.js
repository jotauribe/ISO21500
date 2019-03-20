const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution/constitution');
const ObjectiveRouter = require('./constitution/objective');
const PhasesRouter = require('./constitution/phases');


Router.use('/projects', ProjectRouter);

Router.use('/constitutions' ,ConstitutionRouter);
Router.use('/objectives' ,ObjectiveRouter);
Router.use('/phases' ,PhasesRouter);

module.exports = Router;
