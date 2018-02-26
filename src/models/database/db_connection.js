require('env2')('./config.env');
const DATABASE_URL = process.env.DATABASE_URL;
const { Pool } = require('pg');
let url = '';
if (!DATABASE_URL)
  throw new Error('No DATABASE_URL provided');

url = DATABASE_URL;

const pool = new Pool({ connectionString: url, ssl: true });
module.exports = pool;
