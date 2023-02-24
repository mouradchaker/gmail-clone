import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCQ9CaPJUKL5zrv5Pd3FIgXFGkCCJIChI",
  authDomain: "myclone-6e3b1.firebaseapp.com",
  projectId: "myclone-6e3b1",
  storageBucket: "myclone-6e3b1.appspot.com",
  messagingSenderId: "619490938933",
  appId: "1:619490938933:web:be10cd86841553cfc4217c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
