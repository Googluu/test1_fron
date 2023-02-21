// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzRfPLEnAkTQDr8oZ6f83Ecxy--SKTxIE",
  authDomain: "my-test1-5fc75.firebaseapp.com",
  projectId: "my-test1-5fc75",
  storageBucket: "my-test1-5fc75.appspot.com",
  messagingSenderId: "336766160217",
  appId: "1:336766160217:web:597494fcdbcc27656b1048",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
