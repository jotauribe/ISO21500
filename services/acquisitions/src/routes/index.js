const Router = require('express').Router();
const ProviderRouter = require('./provider');



Router.use('/providers/projects', ProviderRouter);



module.exports = Router;
