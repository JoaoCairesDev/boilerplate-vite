import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyDCOCEe_pdW6Ax7RR8wztNcM6K_g-82lOc",
  authDomain: "saturno-web.firebaseapp.com",
  projectId: "saturno-web",
  storageBucket: "saturno-web.appspot.com",
  messagingSenderId: "1035638955037",
  appId: "1:1035638955037:web:050dd8ab3ece4924bbfaf4",
  measurementId: "G-XF77CEE18C",
};

// Initialize Firebase
if (!firebase.apps.lengt) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
