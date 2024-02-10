// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIeGDKtdQaGVljlphafHvbF5rvgSwg53E",
  authDomain: "chian-tech-hub.firebaseapp.com",
  projectId: "chian-tech-hub",
  storageBucket: "chian-tech-hub.appspot.com",
  messagingSenderId: "1010495762297",
  appId: "1:1010495762297:web:6b3668aa67dd8b8418c9a8",
  measurementId: "G-6W0E52CHZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
