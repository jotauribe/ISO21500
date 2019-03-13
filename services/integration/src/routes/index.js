const Router = require('express').Router();
const ProjectRouter = require('./projects');


Router.use('/projects', ProjectRouter);

module.exports = Router;
