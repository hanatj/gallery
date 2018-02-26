const postsDb = require('../../models/postsDb');
module.exports = (req, res) => {
  const { id } = req.params;
  res.send(postsDb[id]);
};
