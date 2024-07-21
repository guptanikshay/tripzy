// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxh2VXWa0B3XNV6KPOq_h6KdapXuXxSzw",
  authDomain: "tripzy-e90b9.firebaseapp.com",
  projectId: "tripzy-e90b9",
  storageBucket: "tripzy-e90b9.appspot.com",
  messagingSenderId: "285997267317",
  appId: "1:285997267317:web:7fe91280df11c4e495fb3c",
  measurementId: "G-L8404LQCRN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
