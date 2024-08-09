import axios from 'axios';

const logout = async () => {
  try {
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    // Clear the JWT token from localStorage
    localStorage.removeItem('token');
    console.log('Logout successful');
  } catch (err) {
    console.error('Error during logout:', err.response?.data?.message || 'An error occurred');
  }
};

export default logout;
