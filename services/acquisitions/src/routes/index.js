const Router = require("express").Router();
const ProviderRouter = require("./provider");
const AcquisitionsRouter = require("./acquisition");


Router.use('/projects', ProviderRouter);
Router.use('/acquisitions' ,AcquisitionsRouter);


module.exports = Router;
