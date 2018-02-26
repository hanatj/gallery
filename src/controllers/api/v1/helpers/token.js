const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../../../../../config.js').TOKEN_SECRET;

function createToken(id, username, role) {
  return jwt.sign({ id, username, role }, TOKEN_SECRET);
}

module.exports = {
  createToken
};
