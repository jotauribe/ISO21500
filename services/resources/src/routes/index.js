const Router = require('express').Router();
const TeamsRouter = require('./teams');


Router.use('/teams', TeamsRouter);


module.exports = Router;
