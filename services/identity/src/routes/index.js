const MainRouter = require('express').Router();
const UserRouter = require('./user.routes');

MainRouter.use('/', UserRouter);

module.exports = MainRouter;
