import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCRoOL1da2W7J-h4TOhxPZEG6p3_D8fPXE",
    authDomain: "clothing-db-859e4.firebaseapp.com",
    projectId: "clothing-db-859e4",
    storageBucket: "clothing-db-859e4.appspot.com",
    messagingSenderId: "700575629247",
    appId: "1:700575629247:web:61f63c7bebe6566e062b0a",
    measurementId: "G-FXH5KP5LSL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp: 'select_account'});
  export const sigInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;