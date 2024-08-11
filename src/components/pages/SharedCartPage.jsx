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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SharedCartPage;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SharedCart = () => {
//   const cartId = localStorage.getItem('currentCartId');
//   const [products, setProducts] = useState([]);
//   const [sharedCartProducts, setSharedCartProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const response = await axios.get('/api/cart/products'); // Fetch all products
//         setProducts(response.data);
//       } catch (err) {
//         setError('Error fetching products');
//         console.error(err);
//       }
//     };

//     const fetchSharedCartProducts = async () => {
//       try {
//         const response = await axios.get(`/api/cart/${cartId}/products`); // Fetch products in shared cart
//         setSharedCartProducts(response.data);
//       } catch (err) {
//         setError('Error fetching shared cart products');
//         console.error(err);
//       }
//     };

//     fetchAllProducts();
//     fetchSharedCartProducts();
//   }, [cartId]);

//   // const addToSharedCart = async (productId) => {
//   //   try {
//   //     await axios.post(`/api/cart/${cartId}/add-product`, { productId }, { withCredentials: true });
//   //     alert('Product added to shared cart');
//   //     setSharedCartProducts([...sharedCartProducts, products.find(product => product.id === productId)]);
//   //   } catch (err) {
//   //     console.error('Error adding product to shared cart:', err);
//   //   }
//   // };

//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Shared Cart</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id} style={{ display: sharedCartProducts.some(p => p.id === product.id) ? 'block' : 'none' }}>
//             <div className="product-card">
//               <div className="product-details">
//                 <h2>{product.name}</h2>
//                 <p>Price: ${product.price}</p>
//                 <p>Rating: {product.rating}</p>
//                 <p>Number of Ratings: {product.numRatings}</p>
//               </div>
//               <div className="product-actions">
//                 <button onClick={() => addToSharedCart(product.id)}>Add to Shared Cart</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SharedCart;
