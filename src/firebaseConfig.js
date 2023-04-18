// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDJAZU6te5HvKM8IsLIkML1OqQg1m4NYds",
  authDomain: "ecommerce-c6.firebaseapp.com",
  projectId: "ecommerce-c6",
  storageBucket: "ecommerce-c6.appspot.com",
  messagingSenderId: "83168780044",
  appId: "1:83168780044:web:483c7abab4553ce315b329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)