const {createPool} = require('mysql');

const pool = createPool({
  port: process.env.HOST_PORT,
  host: process.env.HOST_NAME,
  user: process.env.DB_HOST_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});
module.exports = pool;