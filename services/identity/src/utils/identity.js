const FlakeId = require('flake-idgen');
const intFormat = require('biguint-format');
const idGenerator = new FlakeId();

function nextId() {
  return intFormat(idGenerator.next(), 'dec');
}

module.exports.nextId = nextId;
