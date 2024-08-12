import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SharedCartPage = () => {
  const [sharedCartProducts, setSharedCartProducts] = useState([]);
  const [error, setError] = useState(null);
  const cartId = localStorage.getItem('currentCartId'); // Retrieve the cartId from localStorage

  useEffect(() => {
    const fetchSharedCartProducts = async () => {
      try {
        const response = await axios.get(`/api/cart/${cartId}/products`); // Fetch products in shared cart
        setSharedCartProducts(response.data);
      } catch (err) {
        setError('Error fetching shared cart products');
        console.error(err);
      }
    };

    fetchSharedCartProducts(); // Call the function to fetch products when the component mounts
  }, [cartId]); // Add cartId as a dependency so the effect runs if it changes

  return (
    <div>
      <h1>Shared Cart Products</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {sharedCartProducts.length === 0 ? (
        <p>No products in the shared cart.</p>
      ) : (
        <ul>
          {sharedCartProducts.map((product) => (
            <li key={product.productId}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating} ({product.numRatings} ratings)</p>
              <p>Vote Count: {product.voteCount}</p>
              <p>Added by: {product.addedBy}</p> {/* Display the username */}
              <p>imageUrl: {product.imageUrl}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SharedCartPage;
