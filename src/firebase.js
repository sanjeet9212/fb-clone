import firebase from "firebase";
// Firebase account with sanju02..

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAHLmr23Z669tC62GINC3Rp6wLTFJ8PAPM",
    authDomain: "sanju02-680db.firebaseapp.com",
    projectId: "sanju02-680db",
    storageBucket: "sanju02-680db.appspot.com",
    messagingSenderId: "738932688769",
    appId: "1:738932688769:web:744647bc1843c6fc8b4a80",
    measurementId: "G-69XJBWXY79"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
