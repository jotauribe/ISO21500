const Router = require('express').Router();
const actOfConstitution = require('../controllers/ActOfConstiution');

Router.post('/', actOfConstitution.create);
Router.get('/:id', actOfConstitution.get);
Router.get('/', actOfConstitution.find);
Router.put('/:id', actOfConstitution.update);
Router.delete('/:id', actOfConstitution.remove);

module.exports = Router;