const queries =require('../../../../models/queries/index.js');
const getItemDetails = (req,res) => {
  queries.item.itemDetails.getItemDetails(req.params.item_id).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).json({ message: err.message });
  });
};

module.exports = {
  getItemDetails
};
