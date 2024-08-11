import React, { useState } from 'react';
import axios from 'axios';
import styles from './JoinCart.module.scss';

const JoinCart = () => {
  const [invitationLink, setInvitationLink] = useState('');
  const [cart, setCart] = useState(null);
  const [error, setError] = useState('');

  const handleJoinCart = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/cart/join', 
        { invitationLink }, 
        { withCredentials: true }
      );
      setCart(response.data);
    setError('');
     } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          const { message } = err.response.data;
          if (message === 'You have already joined this cart') {
            setError('You have already joined this cart or You cannot join your own cart.');
          } else if (message === 'You cannot join your own cart') {
            setError('You cannot join your own cart or You have already joined this cart.');
          } else {
            setError('Error joining cart. Please check the invitation link.');
          }
        } else {
          setError('Error joining cart. Please check the invitation link.');
        }
      } else {
        setError('Error joining cart. Please check the invitation link.');
      }
      setCart(null);
      console.error(err);
    }
  };

  return (
    <div className={styles.joinCartContainer}>
      <h2>Join a Shared Cart</h2>
      <form onSubmit={handleJoinCart}>
        <div className={styles.formGroup}>
          <label htmlFor="invitationLink">Invitation Link:</label>
          <input 
            type="text" 
            id="invitationLink" 
            value={invitationLink} 
            onChange={(e) => setInvitationLink(e.target.value)} 
            required 
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit">Join Cart</button>
      </form>

      {cart && (
        <div className={styles.cartDetails}>
          <h3>Shared Cart Details</h3>
          <p>Cart Name: {cart.ownerName}</p>
          <p>Shared Cart ID: {cart.cartId}</p>
          {/* Add more cart details or options to add products here */}
        </div>
      )}
    </div>
  );
};

export default JoinCart;
