import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2b1wMN6XKuVzSY_iQoalYycb-451p-j4",
    authDomain: "judit-nextjs.firebaseapp.com",
    projectId: "judit-nextjs",
    storageBucket: "judit-nextjs.appspot.com",
    messagingSenderId: "524676898534",
    appId: "1:524676898534:web:d5e70ddab805297150a527"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);