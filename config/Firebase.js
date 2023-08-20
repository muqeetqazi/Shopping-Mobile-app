// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzcYayiy4wnK-llNPY5AM5EBItZrpEfWI",
  authDomain: "shopping-75853.firebaseapp.com",
  projectId: "shopping-75853",
  storageBucket: "shopping-75853.appspot.com",
  messagingSenderId: "802787936073",
  appId: "1:802787936073:web:8b90b7ac639dbb2a65fc98",
  measurementId: "G-3E415SXHHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;