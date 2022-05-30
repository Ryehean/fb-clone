import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXeu1RULHP9Z1-RW8_FuLfYDmaS-wrrHM",
    authDomain: "facebook-clone-ad027.firebaseapp.com",
    projectId: "facebook-clone-ad027",
    storageBucket: "facebook-clone-ad027.appspot.com",
    messagingSenderId: "81872604959",
    appId: "1:81872604959:web:6151af99488c10e60e6a2a",
    measurementId: "G-B0HYDW075B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;