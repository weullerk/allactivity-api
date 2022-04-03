const mysql = require('mysql');
const util = require('util');

const db = () => mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'allactivity'
});

const query = (conn, sql, args = null) => util.promisify(conn.query).call(conn, sql, args);

const end = (conn) => util.promisify(conn.end).call(conn);

module.exports = [db, query, end];