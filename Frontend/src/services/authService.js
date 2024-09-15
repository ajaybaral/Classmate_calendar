import axios from 'axios';

// Example endpoint - adjust according to your backend API
const API_BASE_URL = 'http://localhost:8000/api';

export const loginWithGoogle = async (idToken) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { idToken });
        return response.data; // e.g., { token: '...', user: { ... } }
    } catch (error) {
        console.error('Error logging in with Google:', error);
        throw error;
    }
};

export const getUserProfile = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data; // e.g., { user: { ... } }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const logout = () => {
    // Clear token or any other logout logic
    console.log('Logging out...');
};
