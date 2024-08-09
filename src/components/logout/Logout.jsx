import axios from 'axios';

const logout = async () => {
  try {
    await axios.get('/api/auth/logout', {}, { withCredentials: true });
    localStorage.removeItem('token');
    console.log('Logout successful');
    window.location.href='/login';
  } catch (err) {
    console.error('Error during logout:', err.response?.data?.message || 'An error occurred');
  }
};
export default logout;
