import firebase from "firebase";
// Firebase account with sanju04..

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCRyb2HinhcnBcHP4uRpoDfs91a1PEVIaw",
    authDomain: "sanju04-41cab.firebaseapp.com",
    projectId: "sanju04-41cab",
    storageBucket: "sanju04-41cab.appspot.com",
    messagingSenderId: "188362576392",
    appId: "1:188362576392:web:19560e71d78b543e34b7bd",
    measurementId: "G-DRYC7K1VP9"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
