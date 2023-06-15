// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuPlOjuTvAKJsqE3P_3xF4PD1Agjg48FE",
  authDomain: "blog-react-7e0df.firebaseapp.com",
  projectId: "blog-react-7e0df",
  storageBucket: "blog-react-7e0df.appspot.com",
  messagingSenderId: "724759803902",
  appId: "1:724759803902:web:dfe7d97dae409a681032af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);