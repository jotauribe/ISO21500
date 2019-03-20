const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution/constitution');
const ObjectiveRouter = require('./constitution/objective');
const PhasesRouter = require('./constitution/phases');
const HitoRouter = require('./constitution/hito');
const OtherRequirementsRouter = require('./constitution/otherRequirements');

Router.use('/projects', ProjectRouter);
Router.use('/constitutions' ,ConstitutionRouter);
Router.use('/objectives' ,ObjectiveRouter);
Router.use('/phases' ,PhasesRouter);
Router.use('/hitos' ,HitoRouter);
Router.use('/otherRequirements' ,OtherRequirementsRouter);

module.exports = Router;
