// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU1ycnGMNuYuKUsZAeDiz4gsj8nyIzhQE",
  authDomain: "calendar-app-c73b3.firebaseapp.com",
  projectId: "calendar-app-c73b3",
  storageBucket: "calendar-app-c73b3.appspot.com",
  messagingSenderId: "728648404181",
  appId: "1:728648404181:web:b587a81c458982c232665c",
  measurementId: "G-PWW4CW0L23"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp); // For Firebase Authentication
const firestore = getFirestore(firebaseApp); // For Firestore Database

// Export Firebase Auth and Firestore
export { auth, firestore };
