// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// DANGER--- DO NOT SHARE CONFIG IN PUBLIC
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaXQFK98C4b7f86qax32ycN8oRBL1e7Fk",
  authDomain: "email-password-auth-f5737.firebaseapp.com",
  projectId: "email-password-auth-f5737",
  storageBucket: "email-password-auth-f5737.firebasestorage.app",
  messagingSenderId: "695272730297",
  appId: "1:695272730297:web:5460772c0f2ff882ec3568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);