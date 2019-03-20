const Router = require('express').Router();
const ProviderRouter = require('./provider');



Router.use('/providers', ProviderRouter);



module.exports = Router;
