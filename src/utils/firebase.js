// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvuo2YoN4lursjE6k-CkPU5Z2EiuLZl0s",
  authDomain: "lightshift-ff443.firebaseapp.com",
  projectId: "lightshift-ff443",
  storageBucket: "lightshift-ff443.appspot.com",
  messagingSenderId: "567190329756",
  appId: "1:567190329756:web:d7d646bfc9aaa654b75059",
  measurementId: "G-ZV2HLCVCS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);