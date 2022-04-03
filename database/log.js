const util = require('util');
const [db, query, end, ] = require('./db');

/* List all logs from logs table in descending order */
const log = {

  listLogs: async () => {

    const conn = db();
    conn.connect();

    try {

      const data = await query(conn, "SELECT id, start, end, description FROM logs ORDER BY id DESC");
      await end(conn);

      return data;

    } catch (err) {

      await end(conn);
      return [];

    }

  }

};

module.exports = log;
