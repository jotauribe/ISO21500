class Controller {
  constructor({ get, find, create, update, remove }, url) {
    this.get = get;
    this.find = find;
    this.create = create;
    this.update = update;
    this.remove = remove;
    if (url) this.url = url;
  }
}

module.exports = Controller;
