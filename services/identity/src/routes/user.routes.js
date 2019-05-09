const Router = require('express').Router;
const user = require('../controllers/user');
const { asyncHandler } = require('../utils').handlers;

const usersRoutes = Router()
  .post('/users/', asyncHandler(user.create))
  .get('/users/:id', asyncHandler(user.get))
  .get('/users/', asyncHandler(user.find))
  .put('/users/:id', asyncHandler(user.update))
  .delete('/users/:id', asyncHandler(user.remove));

module.exports = usersRoutes;
