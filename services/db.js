const mysql = require('mysql2/promise');

// DB connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'foodshare_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

console.log(`Connecting to database ${dbConfig.database} on host ${dbConfig.host}...`);

// Create pool
const pool = mysql.createPool(dbConfig);

// Utility query function as requested by Lab 3 & 5
async function query(sql, params) {
  try {
    const [rows, fields] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('Database Query Error:', error.message);
    throw error;
  }
}

module.exports = {
  query,
  pool
};
