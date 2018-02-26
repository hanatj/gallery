const connection = require('../../database/db_connection.js');

const getItemAttributes = itemId => {
  const sql = {
    text: 'SELECT attribute FROM item_attribute WHERE item_id = $1;',
    values: [itemId]
  };

  return new Promise((resolve, reject) => {
    connection.query(sql, (err, rs) => {
      if (err)
        reject(err);
      else
        resolve(rs.rows[0]);
    });
  });
};

module.exports ={
  getItemAttributes
};
