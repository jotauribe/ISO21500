const Router = require('express').Router();
const previousInformation = require('../../controllers/constitution/previousInfo');

Router.post('/', previousInformation.create);
Router.get('/', previousInformation.get);

Router.patch('/', previousInformation.update);

module.exports = Router;
