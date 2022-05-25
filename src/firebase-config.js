// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBM1NEjd7DXVuhM0fAWx-5l3D8e5p5rqmI',
  authDomain: 'fir-auth-8bec2.firebaseapp.com',
  projectId: 'fir-auth-8bec2',
  storageBucket: 'fir-auth-8bec2.appspot.com',
  messagingSenderId: '308610332573',
  appId: '1:308610332573:web:7c3718484852ee1b89e174',
  measurementId: 'G-D0GNSTQRDJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
