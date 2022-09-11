// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjVOnhjYP-1FgCghqtxqt7A6Hpd4LnGdg",
  authDomain: "transport-362112.firebaseapp.com",
  projectId: "transport-362112",
  storageBucket: "transport-362112.appspot.com",
  messagingSenderId: "757098013688",
  appId: "1:757098013688:web:fb8b58cd3bda0b3d0c2c0d",
  measurementId: "G-1XWH3T47R9",
  databaseURL: "https://transport-362112-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
