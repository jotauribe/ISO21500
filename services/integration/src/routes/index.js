const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution');
const PrevInfoRouter = require('./constitution/previousInfo');
const ObjectivesRouter = require('./constitution/objectives');
const MilestoneRouter = require('./constitution/milestone');
const PhasesRouter = require('./constitution/phases');

Router.use('/projects', ProjectRouter);
Router.use('/projects', ConstitutionRouter);
Router.use(
  '/projects/:projectId/integration/constitution/prev-info',
  (req, res, next) => {
    req.projectId = req.params.projectId;
    next();
  },
  PrevInfoRouter
);
Router.use(
  '/projects/:projectId/integration/constitution/objectives',
  (req, res, next) => {
    req.projectId = req.params.projectId;
    next();
  },
  ObjectivesRouter
);
Router.use(
  '/projects/:projectId/integration/constitution/milestones',
  (req, res, next) => {
    req.projectId = req.params.projectId;
    next();
  },
  MilestoneRouter
);
Router.use(
  '/projects/:projectId/integration/constitution/phases',
  (req, res, next) => {
    req.projectId = req.params.projectId;
    next();
  },
  PhasesRouter
);

module.exports = Router;
