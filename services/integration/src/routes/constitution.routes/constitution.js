const Router = require('express').Router();
const constitution = require('../controllers/ActOfConstiution');

Router.post('/', constitution.create);
Router.get('/:id', constitution.get);
Router.get('/', constitution.find);
Router.put('/:id', constitution.update);
Router.delete('/:id', constitution.remove);

module.exports = Router;