const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution');
const PrevInfoRouter = require('./constitution/previousInfo');

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

module.exports = Router;
