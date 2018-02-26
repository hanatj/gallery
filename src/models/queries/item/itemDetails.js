const connection = require('../../database/db_connection.js');

const getItemDetails = itemId => {
  const sql = {
    text: `SELECT item_id, item_name, item_slug, design.design_name, users.neckName, cost,
    photo_url FROM item NATURAL JOIN design INNER JOIN users
    ON users.id = design.user_id WHERE item_id = $1;`,
    values: [itemId]
  };

  return new Promise((resolve, reject) => {
    connection.query(sql, (err, rs) => {
      if (err)
        reject(err);
      else
        resolve(rs.rows);
    });
  });
};

module.exports ={
  getItemDetails
};
