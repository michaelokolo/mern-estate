// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-c7493.firebaseapp.com',
  projectId: 'mern-estate-c7493',
  storageBucket: 'mern-estate-c7493.appspot.com',
  messagingSenderId: '1029877552229',
  appId: '1:1029877552229:web:bac2c9cfc5647edf1a228c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
