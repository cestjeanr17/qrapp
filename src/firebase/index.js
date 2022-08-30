// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbrgTdpevozRGe-0lhVulUvREZXMjQeLo",
  authDomain: "qrapp-ee263.firebaseapp.com",
  projectId: "qrapp-ee263",
  storageBucket: "qrapp-ee263.appspot.com",
  messagingSenderId: "549881730849",
  appId: "1:549881730849:web:0716ff54d0eff4aa7a1060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const collRef = collection(db, "equipos")