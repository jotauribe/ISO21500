const requireDirectory = require('require-directory');

const renamer = function controllerRenamer(originalName) {
  if (originalName === 'previousInfo') return 'prev-info';
  return originalName;
};

const excluder = function controllerExcluder(path) {
  return /controller\.js$/gi.test(path);
};

module.exports = requireDirectory(module, {
  rename: renamer,
  exclude: excluder
});
