const pool = require('../db'); // Import the database pool from the configuration file

// Function to create a new menu item
async function createMenuItem({ name, price, category, nutritionInfo, customizations }) {
  const query = `
    INSERT INTO menu_items (name, price, category, nutrition_info, customizations) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  const values = [name, price, category, nutritionInfo, customizations];

  const result = await pool.query(query, values);
  return result.rows[0];
}

// Function to get all menu items
async function getAllMenuItems() {
  const query = 'SELECT * FROM menu_items';
  const result = await pool.query(query);
  return result.rows;
}

module.exports = { createMenuItem, getAllMenuItems };
