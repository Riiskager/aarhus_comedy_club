// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmegsovMogbVH5ZI-OZ1LslJqbH-iFXRQ",
  authDomain: "aarhus-comedy-club.firebaseapp.com",
  databaseURL: "https://aarhus-comedy-club-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aarhus-comedy-club",
  storageBucket: "aarhus-comedy-club.firebasestorage.app",
  messagingSenderId: "58912871778",
  appId: "1:58912871778:web:15bd27126c62a6cfc9883b",
  measurementId: "G-1NKDE5C5BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);