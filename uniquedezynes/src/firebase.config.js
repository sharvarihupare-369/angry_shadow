// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0w7Yvp3gOy1y3V4shmJ_kktlE60rFh_A",
  authDomain: "uniqued-login.firebaseapp.com",
  projectId: "uniqued-login",
  storageBucket: "uniqued-login.appspot.com",
  messagingSenderId: "322235005928",
  appId: "1:322235005928:web:b95647d48a28b68cd3425d",
  measurementId: "G-ZZGEXDZZPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);