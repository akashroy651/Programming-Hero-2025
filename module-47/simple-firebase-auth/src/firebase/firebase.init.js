// DO NOT sent firebase config to repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3R6yQ1XBYzLNVX--EaWcjEAklAr8P0gU",
  authDomain: "simple-firebase-auth-230c4.firebaseapp.com",
  projectId: "simple-firebase-auth-230c4",
  storageBucket: "simple-firebase-auth-230c4.firebasestorage.app",
  messagingSenderId: "975670445317",
  appId: "1:975670445317:web:35ffedd0dd69b39b72a36c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);