// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdVOePedink2O4Efuzt92wj9pM2OTQrDs",
  authDomain: "reactargentina-d7c74.firebaseapp.com",
  projectId: "reactargentina-d7c74",
  storageBucket: "reactargentina-d7c74.appspot.com",
  messagingSenderId: "715367381701",
  appId: "1:715367381701:web:b6eed015a0d5ef12ed4eac"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
