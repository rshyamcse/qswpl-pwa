// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhwnQMBc1iNmT2APNk-MyAEJZsKCZUeD0",
    authDomain: "pwaa-f6f47.firebaseapp.com",
    projectId: "pwaa-f6f47",
    storageBucket: "pwaa-f6f47.firebasestorage.app",
    messagingSenderId: "866863596172",
    appId: "1:866863596172:web:7fdcca6ad300c5c97931a9",
}
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
