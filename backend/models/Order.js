const pool = require('../db');

// Function to create an order
async function createOrder({ userId, items, totalAmount, status = 'Preparing' }) {
  const query = `
    INSERT INTO orders (user_id, items, total_amount, status) 
    VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [userId, JSON.stringify(items), totalAmount, status];

  const result = await pool.query(query, values);
  return result.rows[0];
}

// Function to get orders by user ID
async function getOrdersByUser(userId) {
  const query = 'SELECT * FROM orders WHERE user_id = $1';
  const result = await pool.query(query, [userId]);
  return result.rows;
}

module.exports = { createOrder, getOrdersByUser };
