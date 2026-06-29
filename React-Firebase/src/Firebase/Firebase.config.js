// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdFnbRaSgAdiOh_rQc9oYG5M26kbXoPHE",
  authDomain: "simple-firebase-dd82e.firebaseapp.com",
  projectId: "simple-firebase-dd82e",
  storageBucket: "simple-firebase-dd82e.firebasestorage.app",
  messagingSenderId: "591149667982",
  appId: "1:591149667982:web:6062651e4afc4ed4905bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);