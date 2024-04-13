// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blog-sbs.firebaseapp.com',
  projectId: 'blog-sbs',
  storageBucket: 'blog-sbs.appspot.com',
  messagingSenderId: '1056189275328',
  appId: '1:1056189275328:web:d8350a71ef6f28f1e16125',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
