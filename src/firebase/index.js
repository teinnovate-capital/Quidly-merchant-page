// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChJ6b21RGIpHMnuDsRibvr3RtnpvNJ3cM",
  authDomain: "quidly-firebase.firebaseapp.com",
  projectId: "quidly-firebase",
  storageBucket: "quidly-firebase.appspot.com",
  messagingSenderId: "549397264222",
  appId: "1:549397264222:web:0e076a4ebfc2f48643c1cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }