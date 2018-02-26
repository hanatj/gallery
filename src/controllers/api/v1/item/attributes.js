const queries =require('../../../../models/queries/index.js');
const getItemAttributes = (req,res) => {
  Promise.all([
    queries.item.itemAttributes.getItemAttributes(req.params.item_id),
    queries.item.itemVariations.getItemVariations(req.params.item_id)
  ])
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};
module.exports = {
  getItemAttributes
};
