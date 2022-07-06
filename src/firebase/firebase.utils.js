import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyAiqdxDwIchffbpav_xF6Q_QJ9qmqGuMBc",
    authDomain: "khalsa-clothing-db.firebaseapp.com",
    projectId: "khalsa-clothing-db",
    storageBucket: "khalsa-clothing-db.appspot.com",
    messagingSenderId: "935405317391",
    appId: "1:935405317391:web:d82f150151c334ee37a27a",
    measurementId: "G-PZ46QN72BE"
  };
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=> auth.signInWithPopup(provider);
export default firebase;