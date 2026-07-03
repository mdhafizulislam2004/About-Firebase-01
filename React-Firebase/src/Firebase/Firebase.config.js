// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDju3F1vcWDn-1Laj8p62Wdbk4m1sX16o8",
  authDomain: "simple-firebase-auth-2ffd5.firebaseapp.com",
  projectId: "simple-firebase-auth-2ffd5",
  storageBucket: "simple-firebase-auth-2ffd5.firebasestorage.app",
  messagingSenderId: "291617637666",
  appId: "1:291617637666:web:9196bfdd37207e0961117b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);