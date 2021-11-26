import firebase from "firebase";
// Firebase account with sanju03..

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD0uzUHyZalUWbjMiGjUWLbRUpl65hSG-I",
    authDomain: "sanju03-c4639.firebaseapp.com",
    projectId: "sanju03-c4639",
    storageBucket: "sanju03-c4639.appspot.com",
    messagingSenderId: "647591371193",
    appId: "1:647591371193:web:d531ce85bbf9048f5e9668",
    measurementId: "G-4ZVY96EDL6"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
