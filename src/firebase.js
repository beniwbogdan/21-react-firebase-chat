import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWVfGAo9EJ-SAiwZIaS7uGoHSV5Q0yEvo",
    authDomain: "reactchat-dd95b.firebaseapp.com",
    projectId: "reactchat-dd95b",
    storageBucket: "reactchat-dd95b.appspot.com",
    messagingSenderId: "602002885139",
    appId: "1:602002885139:web:818200841644b4d893cde6"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();