// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEWK0betpaC5F16oZeWt1qj_d9jiaAV7w",
  authDomain: "next-todo-5d372.firebaseapp.com",
  database: "https://vite-firebase-65ba7.firebaseio.com",
  projectId: "next-todo-5d372",
  storageBucket: "next-todo-5d372.appspot.com",
  messagingSenderId: "695477438838",
  appId: "1:695477438838:web:73612cd5e7eb2af9bad257",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
