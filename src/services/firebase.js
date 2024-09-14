// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const some = import.meta.env.AUTH_APIKEY;
console.log(some);
const firebaseConfig = {
  apiKey: "AIzaSyCaUHvogtBfLuMfEUo3mbRX6zQPcZTHGBI",
  authDomain: "affluence-avenue-20b28.firebaseapp.com",
  projectId: "affluence-avenue-20b28",
  storageBucket: "affluence-avenue-20b28.appspot.com",
  messagingSenderId: "934917739648",
  appId: "1:934917739648:web:3ce30ff9fa471497628265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
