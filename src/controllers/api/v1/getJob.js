const db = require('../../../models/db.json');
module.exports = (req, res) => {
  const { id } = req.params;
  const job = db.jobs[id];
  res.send(job);
};
