const Router = require('express').Router;
const user = require('../controllers/user');
const { asyncHandler } = require('../utils');

const usersRoutes = Router()
  .post('/', asyncHandler(user.create))
  .get('/:id', asyncHandler(user.get))
  .get('/', asyncHandler(user.find))
  .put('/:id', asyncHandler(user.update))
  .delete('/:id', asyncHandler(user.remove));

module.exports = Router('/users', usersRoutes);
