const { Pool } = require('pg'); // Import PostgreSQL client
require('dotenv').config(); // Load environment variables

const pool = new Pool({
  user: process.env.DB_USER || 'canteen_ordering_system_user', // PostgreSQL username
  host: process.env.DB_HOST || '127.0.0.1', // PostgreSQL host
  database: process.env.DB_NAME || 'canteen_ordering_system', // Database name
  password: process.env.DB_PASS || 'IA4G9zZ3gEfUfl1y7TmxrrbXPJuFQ2Po', // PostgreSQL password
  port: process.env.DB_PORT || 5432, // PostgreSQL port
  ssl: true, // Enable SSL
});

module.exports = pool; // Export the pool for use in other files
