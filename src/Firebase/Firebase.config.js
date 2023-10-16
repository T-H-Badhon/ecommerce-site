// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrh3q5vD6isq3XG-CqeksGP2CHcpS5qFk",
  authDomain: "eccommerce-site.firebaseapp.com",
  projectId: "eccommerce-site",
  storageBucket: "eccommerce-site.appspot.com",
  messagingSenderId: "615946278144",
  appId: "1:615946278144:web:a2f4b36dc25410cd154fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;