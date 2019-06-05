const Router = require('express').Router;

const self = (module.exports = {
  build: (url, { create, get, find, update, remove }) => {
    const router = Router();

    if (create) router.post('/', create);
    if (get) router.get('/:id', get);
    if (find) router.get('/', find);
    if (update) router.put('/:id', update);
    if (remove) router.delete('/:id', remove);

    return Router().use(url, router);
  }
});
