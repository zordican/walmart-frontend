import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SharedCart.module.scss';

const SharedCart = () => {
  const [username, setUsername] = useState('');
  const [invitationLink, setInvitationLink] = useState('');
  const [error, setError] = useState('');

  // Fetch user details on component mount
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/check', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const data = await response.json();
      setUsername(data.user.name);
    } catch (err) {
      setError('Error fetching user details');
      console.error(err);
    }
  };

  fetchUser();
}, []);


  // Create cart with invitation link
  const handleCreateCart = async () => {
    try {
      const response = await axios.post('/api/cart/create', { name: username }, { withCredentials: true });
      setInvitationLink(response.data.invitationLink);
    } catch (err) {
      setError('Error creating cart');
      console.error(err);
    }
  };

  // Copy invitation link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    alert('Invitation link copied to clipboard!');
  };

  return (
    <div className={styles.sharedCartContainer}>
      <h2>Welcome, {username}</h2>
      <button onClick={handleCreateCart}>Create Shared Cart</button>
      {invitationLink && (
        <div className={styles.invitationSection}>
          <p>Your invitation link:</p>
          <input type="text" value={invitationLink} readOnly />
          <button onClick={handleCopyLink}>Copy Link</button>
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default SharedCart;
