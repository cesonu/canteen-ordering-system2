const pool = require('../db');

// Function to create a new user
async function createUser({ username, email, password, dietaryRestrictions, allergies }) {
  const query = `
    INSERT INTO users (username, email, password, dietary_restrictions, allergies) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  const values = [username, email, password, dietaryRestrictions, allergies];

  const result = await pool.query(query, values);
  return result.rows[0];
}

// Function to get a user by email
async function getUserByEmail(email) {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
}

module.exports = { createUser, getUserByEmail };
