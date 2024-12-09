import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Pizza', quantity: 2, price: 12.99 },
    { id: 2, name: 'Burger', quantity: 1, price: 9.99 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Total: ${(item.quantity * item.price).toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
