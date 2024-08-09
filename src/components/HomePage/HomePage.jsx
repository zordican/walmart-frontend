// src/pages/HomePage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products'); // Fetch products from backend
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
        //console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      await axios.post('/api/cart/add-product', { productId }, { withCredentials: true });
      alert('Product added to cart');
    } catch (err) {
      console.error('Error adding product to cart:', err);
    }
  };

  const addToSharedCart = async (productId, cartId) => {
    try {
      await axios.post(`/api/cart/${cartId}/add-product`, { productId }, { withCredentials: true });
      alert('Product added to shared cart');
    } catch (err) {
      console.error('Error adding product to shared cart:', err);
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Number of Ratings: {product.numRatings}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              {/* Add your shared cart ID here or implement a UI to choose a shared cart */}
              <button onClick={() => addToSharedCart(product.id, 'sharedCartId')}>Add to Shared Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
