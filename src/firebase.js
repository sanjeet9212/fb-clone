import firebase from "firebase";
// Firebase account with Sanju01..

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDTET08uK-xhOQVWilheVrWt9hkfPAmDWE",
    authDomain: "sanju01-cf2db.firebaseapp.com",
    projectId: "sanju01-cf2db",
    storageBucket: "sanju01-cf2db.appspot.com",
    messagingSenderId: "434677585526",
    appId: "1:434677585526:web:08cedd1c9840c495613157",
    measurementId: "G-X50RH6KX5K"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
