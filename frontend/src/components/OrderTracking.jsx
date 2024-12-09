import React from 'react';

const OrderTracking = () => {
  const orders = [
    { id: 1, item: 'Pizza', status: 'Preparing' },
    { id: 2, item: 'Burger', status: 'Out for Delivery' },
  ];

  return (
    <div>
      <h1>Order Tracking</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.item} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTracking;
