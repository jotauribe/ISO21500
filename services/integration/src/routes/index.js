const Router = require('express').Router();
const ProjectRouter = require('./projects')
const UserRouter = require('./users')

Router.use('/users', UserRouter);
Router.use('/projects', ProjectRouter);

module.exports = Router;