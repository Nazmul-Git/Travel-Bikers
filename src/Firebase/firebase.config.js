// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA3_YQNHefitGmA8xHWKgsj7QYhsT-RDg",
  authDomain: "travel-bikers.firebaseapp.com",
  projectId: "travel-bikers",
  storageBucket: "travel-bikers.appspot.com",
  messagingSenderId: "112971284774",
  appId: "1:112971284774:web:0cba6fbaaf10186f1a41e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;