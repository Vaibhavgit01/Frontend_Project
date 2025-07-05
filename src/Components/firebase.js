// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8sfjgA4YIQMQgOu8QTkXzDMK1jh4VQn0",
  authDomain: "login-auth-adde7.firebaseapp.com",
  projectId: "login-auth-adde7",
  storageBucket: "login-auth-adde7.firebasestorage.app",
  messagingSenderId: "473898798150",
  appId: "1:473898798150:web:697c0922a581adb3ed8e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;