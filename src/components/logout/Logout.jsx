const logout = async () => {
    try {
      // Clear the JWT token from localStorage
      localStorage.removeItem('token');
  
      // Delete the cookie by setting its expiration date to the past
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      
      console.log('Logout successful');
    } catch (err) {
      console.error('Error during logout:', err.message || 'An error occurred');
    }
  };
  
  export default logout;
  