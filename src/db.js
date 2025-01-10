// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuCV84v-eIJT0LTMPC_-EvMAnmue3uxbI",
  authDomain: "fir-summer-2024-ce6f0.firebaseapp.com",
  projectId: "fir-summer-2024-ce6f0",
  storageBucket: "fir-summer-2024-ce6f0.firebasestorage.app",
  messagingSenderId: "380846268982",
  appId: "1:380846268982:web:67f2671be55eeefd306e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const CONTACTS_DATABASE_ID = "contacts";

export default db;