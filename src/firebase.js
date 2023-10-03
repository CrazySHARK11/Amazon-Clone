// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy2WB6hQ0WZQd3br1upedTPdoP-OQUtDM",
  authDomain: "clone-85e07.firebaseapp.com",
  projectId: "clone-85e07",
  storageBucket: "clone-85e07.appspot.com",
  messagingSenderId: "29397676416",
  appId: "1:29397676416:web:6f0ccb901e5d98039b5165",
  measurementId: "G-HT9K9RQ4J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);