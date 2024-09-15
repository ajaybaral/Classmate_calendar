import React from 'react';
import { auth } from './../firebaseConfig'; // No need for default export
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection


const LoginPage = () => {
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const token = await result.user.getIdToken();
                // Send the token to the backend for verification
                axios.get('/api/auth/profile', {
                    headers: {
                        Authorization: token,
                    }
                })
                .then(res => {
                    console.log('User authenticated:', res.data);
                    // Redirect to CalendarPage after login
                    Navigate('/calendar');
                    
                })
                .catch(err => {
                    console.error('Error verifying token', err);
                });
            })
            .catch(error => {
                console.error('Google login error', error);
            });
    };

    return (
        <div>
            <button onClick={googleLogin}>Login with Google</button>
        </div>
    );
};

export default LoginPage;
