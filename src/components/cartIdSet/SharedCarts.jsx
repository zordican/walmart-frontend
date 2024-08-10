// components/SharedCarts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SharedCarts = () => {
  const [joinedCarts, setJoinedCarts] = useState([]);

  useEffect(() => {
    const fetchJoinedCarts = async () => {
      try {
        const response = await axios.get(`/api/cart/joinedCarts`);
        setJoinedCarts(response.data);
      } catch (err) {
        console.error('Error fetching joined carts:', err);
      }
    };

    fetchJoinedCarts();
  }, []);

  const handleCartClick = (cartId) => {
    // Store the selected cartId in localStorage
    localStorage.setItem('currentCartId', cartId);
    alert('Cart selected');
  };

  return (
    <div>
      <h2>Your Joined Carts</h2>
      <ul>
        {joinedCarts.map(cart => (
          <li key={cart.cartId}>
            <button onClick={() => handleCartClick(cart.cartId)}>
              {cart.ownerName}'s Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SharedCarts;
