const fs = require('fs');

const dbConnection = require('./db_connection');
const insertsSql = require('./inserts.js');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConnection.query(sql, err => {
  if (err) {
    throw err;
  } else {
    dbConnection.query(insertsSql, newErr => {
      if (newErr) {
        throw newErr;
      } else {
        console.log('Data is inserted');
      }
    });
  }
});
