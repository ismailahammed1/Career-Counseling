// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCofcZE099d7ZpvF_aU1e1aevGY4KaaZ-w",
  authDomain: "iar-career-counselling.firebaseapp.com",
  projectId: "iar-career-counselling",
  storageBucket: "iar-career-counselling.firebasestorage.app",
  messagingSenderId: "1013607890048",
  appId: "1:1013607890048:web:e31a1ae6c51c6cd6c97a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app