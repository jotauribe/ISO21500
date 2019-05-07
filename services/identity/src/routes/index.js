const MainRouter = require('express').Router();
const UserRouter = require('./user.routes');
const { isAuthenticated } = require('../middlewares/auth');

MainRouter.use('/', UserRouter);
MainRouter.post('/auth', isAuthenticated, (req, res, next) => {
  res.send(req.user);
});

module.exports = MainRouter;
