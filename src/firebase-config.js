// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMLly4sCV_N37um6p5Ud-cKEJ7Hl8SJr0",
  authDomain: "react-pwa-app-edd00.firebaseapp.com",
  projectId: "react-pwa-app-edd00",
  storageBucket: "react-pwa-app-edd00.appspot.com",
  messagingSenderId: "637348920177",
  appId: "1:637348920177:web:599afb5423aec470d5d4d0",
  measurementId: "G-EWWM2J979M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);