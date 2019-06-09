const handlers = require('./handlers');
const routing = require('./routing');

module.exports = {
  ...routing,
  ...handlers
};
