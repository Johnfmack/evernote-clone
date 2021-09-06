import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANDr4DZtEf056L59W7127JHGmghB266K4",
    authDomain: "evernote-clone-abd1b.firebaseapp.com",
    projectId: "evernote-clone-abd1b",
    storageBucket: "evernote-clone-abd1b.appspot.com",
    messagingSenderId: "655102252981",
    appId: "1:655102252981:web:275f774dabecf664d9ebfc"
  };
  
  // Initialize Firebase
 //const app = initializeApp(firebaseConfig);
 //const app = firebase.initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);
  export default firebase;