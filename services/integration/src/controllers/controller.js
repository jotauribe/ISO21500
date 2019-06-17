const { buildHandlers } = require('../utils');

class Controller {
  constructor({ get, find, create, update, remove }, url) {
    this.get = get;
    this.find = find;
    this.create = create;
    this.update = update;
    this.remove = remove;
    if (url) this.url = url;
  }

  static fromModel(model) {
    const handlers = buildHandlers(model);
    return new Controller(handlers);
  }
}

module.exports = Controller;
