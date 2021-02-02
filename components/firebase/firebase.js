import firebase from "@firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAe6310mfChdFwzJXyREjenzYAivOBA2NY",
  authDomain: "dullydesigns-e5c1e.firebaseapp.com",
  projectId: "dullydesigns-e5c1e",
  storageBucket: "dullydesigns-e5c1e.appspot.com",
  messagingSenderId: "640241620930",
  appId: "1:640241620930:web:b4f1e14290d1c50136a85b",
  measurementId: "G-1BFLB5W7X6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
