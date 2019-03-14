const Router = require('express').Router();
const actOfConstitution = require('../controllers/ActOfConstiution');

Router.post('/', actOfConstitution.create);
Router.get('/:id', actOfConstitution.getOne);
Router.get('/', actOfConstitution.getAll);
Router.put('/:id', actOfConstitution.update);
Router.delete('/:id', actOfConstitution.remove);

module.exports = Router;