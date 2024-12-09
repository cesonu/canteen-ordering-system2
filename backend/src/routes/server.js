const express = require('express');
const pool = require('./db'); // Ensure db.js exists and is correctly set up
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON requests

// Example route to check if the server is running
app.get('/', (req, res) => {
  res.send('Canteen Ordering System Backend is Running');
});

// Route to test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Simple query to check database connection
    res.json({
      message: 'Database is connected successfully!',
      databaseTime: result.rows[0].now,
    });
  } catch (err) {
    console.error('Database connection error:', err.message);
    res.status(500).json({
      error: 'Database connection failed',
    });
  }
});

// Example route for menu items (GET all menu items)
app.get('/api/menu-items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu_items'); // Query to fetch all menu items
    res.json(result.rows); // Send the fetched rows as JSON response
  } catch (err) {
    console.error('Error fetching menu items:', err.message);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Example route for orders (POST new order)
app.post('/api/orders', async (req, res) => {
  const { user_id, items, total_amount } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO orders (user_id, items, total_amount) VALUES ($1, $2, $3) RETURNING *',
      [user_id, items, total_amount]
    );
    res.json(result.rows[0]); // Return the newly created order
  } catch (err) {
    console.error('Error creating order:', err.message);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
