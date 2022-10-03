// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getStorage} from 'firebase/storage'

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

import {
  getAuth,
  
  GoogleAuthProvider,
  
  onAuthStateChanged,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fireBaseApp);


// auth

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});


export const auth = getAuth();

//firestore databse

export const db = getFirestore();


//firestore storage

export const storage = getStorage(fireBaseApp)