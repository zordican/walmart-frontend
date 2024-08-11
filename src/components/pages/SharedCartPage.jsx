import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./SharedCartPage.module.scss";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';


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

  const subtotal = sharedCartProducts.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0).toFixed(2);
  // const subtotal = 4000;
  const tax = Math.round(subtotal*0.18);
  const shippingCharges = (subtotal > 1000 ? 0 : 40);
  const discount = (subtotal > 500) ? 400 : 0;
  const calctotal = subtotal + tax + shippingCharges - discount;
  const total = calctotal.toFixed(2);

  // const incrementHandler = (cartItem) => {
  //   console.log("Incrementing quantity for", cartItem.name);
  //   if(cartItem.quantity < cartItem.stock){
  //     cartItem.quantity = cartItem.quantity + 1;
  //   }
  // };
  
  // const decrementHandler = (cartItem) => {
  //   console.log("Decrementing quantity for", cartItem.name);
  //   if(cartItem.quantity > 0){
  //     cartItem.quantity = cartItem.quantity - 1;
  //   }
  // };
  
  // const removeHandler = (id) => {
  //   console.log("Removing item with id", id);
  // };
  return (
    <div>
      <Navbar />
      {/* <h1>Shared Cart Products</h1> */}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {sharedCartProducts.length === 0 ? (
        <p>No products in the shared cart.</p>
      ) : (
        // <ul>
        //   {sharedCartProducts.map((product) => (
        //     <li key={product.productId}>
        //       <h3>{product.name}</h3>
        //       <p>Price: ${product.price}</p>
        //       <p>Rating: {product.rating} ({product.numRatings} ratings)</p>
        //       {/* <p>Vote Count: {product.voteCount}</p> */}
        //     </li>
        //   ))}
        // </ul>
        <div>
        <br /><br />
      <h1>Shared Shopping Cart</h1>
      <section className={styles.cart}>
      <main>
      {sharedCartProducts.map((item) => (
        <CartItem
          key={item.productId}
          name={item.name}
          price={item.price}
          rating={item.rating}
          numRatings={item.numRatings}
          // incrementHandler={incrementHandler}
          // decrementHandler={decrementHandler}
          // removeHandler={removeHandler}
        />
      ))}
      </main>
      <aside className={styles.calcSection}>
      <button>
        { sharedCartProducts.length > 0 && 
          <Link to="/"> Continue to checkout</Link>
        }
        </button>
      <p>GST: ₹{tax}</p>
      <p>Subtotal (Incl. GST): ₹{subtotal}</p>
      <p>Shipping Charges (Incl. GST): ₹{shippingCharges}</p>
      <p> Discount:  
        <em className="green">&nbsp; - ₹{discount}</em>
      </p>
      <p>
        <b> Total: ₹{(calctotal + shippingCharges).toFixed(2)}</b>
      </p>
        
    </aside>
    </section>
        
    </div>
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
