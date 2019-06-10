const Router = require('express').Router();
const _ = require('lodash');
const { buildRoutes } = require('../utils');
const Controller = require('../controllers/controller');
const controllers = require('../controllers');

const baseUrl = '/projects/:projectId/integration';
const endpoints = _.keys(controllers);

const paramsMiddleware = function parentRouteParamsMiddleware(req, res, next) {
  req.projectId = req.params.projectId;
  next();
};

const createRouteHandlers = function routeHandlerBuilder(
  handlerOrBundle,
  endpoint,
  parentEndpoint
) {
  if (handlerOrBundle instanceof Controller) {
    const url =
      handlerOrBundle.url ||
      `${baseUrl}/${[parentEndpoint, endpoint].join('/')}`;

    Router.use(url, paramsMiddleware, buildRoutes(handlerOrBundle));
  } else if (_.isObject(handlerOrBundle))
    _.mapKeys(handlerOrBundle, (value, key) =>
      routeHandlerBuilder(value, key, endpoint)
    );
};

endpoints.forEach(e => {
  createRouteHandlers(controllers[e], e);
});

module.exports = Router;
