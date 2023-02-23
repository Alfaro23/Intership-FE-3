import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBezY1qiTgLNI8lgc_zTg3I9y6WWCrg0Zo",
  authDomain: "quiz-website-a2fa8.firebaseapp.com",
  projectId: "quiz-website-a2fa8",
  storageBucket: "quiz-website-a2fa8.appspot.com",
  messagingSenderId: "610541192280",
  appId: "1:610541192280:web:7781b9ee3434416e4cf62d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
