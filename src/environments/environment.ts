// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDi_ETBkaDaQWd38h2bApOUtpSbgqIUq1w",
    authDomain: "almacen-2d5a4.firebaseapp.com",
    projectId: "almacen-2d5a4",
    storageBucket: "almacen-2d5a4.appspot.com",
    messagingSenderId: "522169302260",
    appId: "1:522169302260:web:2de137ac60a90ccde9f2a1",
    measurementId: "G-F1W76JPML9"
  }
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);