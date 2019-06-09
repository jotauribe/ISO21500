const Router = require('express').Router;

const self = (module.exports = {
  buildRoutes: ({ create, get, find, update, remove }) => {
    const router = Router();

    if (create) router.post('/', create);
    if (get) router.get('/:id', get);
    if (find) router.get('/', find);
    if (update) router.patch('/:id', update);
    if (remove) router.delete('/:id', remove);

    return router;
  }
});
