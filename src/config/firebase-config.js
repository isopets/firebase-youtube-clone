// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjkd0x6PMSkNuY93jewqRSd3B6IG-d1rw",
    authDomain: "fir-clone-1ced2.firebaseapp.com",
    projectId: "fir-clone-1ced2",
    storageBucket: "fir-clone-1ced2.appspot.com",
    messagingSenderId: "99230670143",
    appId: "1:99230670143:web:5607a22c6226c5298bc78a",
    measurementId: "G-PVBZ3XV0S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);