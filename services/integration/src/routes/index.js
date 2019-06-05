const controllers = require('../controllers');
console.log('controller 444: ', controllers);
const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution');
const PrevInfoRouter = require('./constitution/previousInfo');
const ObjectivesRouter = require('./constitution/objectives');

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

module.exports = Router;
