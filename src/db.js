// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3m93k1YI4by_mmA9E4QQsVIcCa_w5Qng",
  authDomain: "winter-2025.firebaseapp.com",
  projectId: "winter-2025",
  storageBucket: "winter-2025.firebasestorage.app",
  messagingSenderId: "573011371463",
  appId: "1:573011371463:web:ad7491d29fda24f10ea5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const CONTACTS_DATABASE_ID = "contacts";

export default db;