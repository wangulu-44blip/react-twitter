// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwgRGj5fuYv0-t7FdLj63KlIuaYDkfWV0",
  authDomain: "twitter--react-2.firebaseapp.com",
  projectId: "twitter--react-2",
  storageBucket: "twitter--react-2.firebasestorage.app",
  messagingSenderId: "937079758360",
  appId: "1:937079758360:web:fbd1c075d6afd785e8ed6d",
  measurementId: "G-678WX13M14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);
export const auth = getAuth();