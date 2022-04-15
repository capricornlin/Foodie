// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKgUQnjp5nfUQJ50ovrePjsfze_Zg9jUA",
  authDomain: "react-foodie-d930f.firebaseapp.com",
  projectId: "react-foodie-d930f",
  storageBucket: "react-foodie-d930f.appspot.com",
  messagingSenderId: "14955430285",
  appId: "1:14955430285:web:8bc181124f64625cb9bdc4",
  measurementId: "G-GTDRS4S9LK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
