import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = async () => {
    try {
        const navigate = useNavigate();
        // Make a request to the backend to clear the cookie
        await axios.post('/api/auth/logout', {}, { withCredentials: true });

        // Clear the entire contents of localStorage
        localStorage.clear();

        // Redirect to login page or home page
        
        navigate('/'); // or navigate('/') for home page

        console.log('Logout successful');
    } catch (err) {
        console.error('Error during logout:', err.message || 'An error occurred');
    }
};
export default Logout;
