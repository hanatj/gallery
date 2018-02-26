const db = require('../../../models/db.json');
module.exports = (req, res) => {
  res.send(db.jobs);
};
