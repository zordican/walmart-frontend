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

  const handleProductRemove = (productId) => {
    setSharedCartProducts(prevProducts => prevProducts.filter(product => product.productId !== productId));
  };

  const subtotal = sharedCartProducts.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0).toFixed(2);
  

  const tax = Math.round(subtotal * 0.18);
  const shippingCharges = (subtotal > 1000 ? 0 : 40);
  const discount = (subtotal > 500) ? 400 : 0;
  const calctotal = subtotal + tax + shippingCharges - discount;
  const total = calctotal.toFixed(2);

  return (
    <div>
      <Navbar />
      <div>
        <br /><br />
        <h1>Shared Shopping Cart</h1>
        <section className={styles.cart}>
          <main>
            {sharedCartProducts.map((item) => (
              <CartItem
                key={item.productId}
                productId={item.productId}
                cartId={cartId}
                name={item.name}
                price={item.price}
                rating={item.rating}
                numRatings={item.numRatings}
                addedBy={item.addedBy}
                imageUrl={item.imageUrl}
                onProductRemove={handleProductRemove} // Pass the removal handler
              />
            ))}
          </main>
          <aside className={styles.calcSection}>
            <button>
              {sharedCartProducts.length > 0 && 
                <Link to="/">Continue to checkout</Link>
              }
            </button>
            <button>
              <Link to="/sharedcart">Share Your Cart</Link>
            </button>
            <p>GST: ₹{tax}</p>
            <p>Subtotal (Incl. GST): ₹{subtotal}</p>
            <p>Shipping Charges (Incl. GST): ₹{shippingCharges}</p>
            <p>Discount:  
              {sharedCartProducts.length > 0 &&
                <Link to="/"> Continue to checkout</Link>
              }
            </p>
            <p>GST: ₹{tax}</p>
            <p>Subtotal (Incl. GST): ₹{subtotal}</p>
            <p>Shipping Charges (Incl. GST): ₹{shippingCharges}</p>
            <p>Discount:
              <em className="green">&nbsp; - ₹{discount}</em>
            </p>
            <p>
              <b>Total: ₹{(calctotal + shippingCharges).toFixed(2)}</b>
            </p>

          </aside>
        </section>
      </div>
    </div>
  );
};

export default SharedCartPage;
