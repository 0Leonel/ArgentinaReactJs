// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_VERCEL_API_KEY,
  authDomain: import.meta.env.VITE_VERCEL_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_VERCEL_PROJECT_ID,
  storageBucket: import.meta.env.VITE_VERCEL_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_VERCEL_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_VERCEL_APP_ID 
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
