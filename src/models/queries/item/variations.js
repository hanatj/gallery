const connection = require('../../database/db_connection.js');

const getItemVariations = itemId => {
  const sql = {
    text: 'SELECT variation FROM variation WHERE item_id = $1;',
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
  getItemVariations
};
