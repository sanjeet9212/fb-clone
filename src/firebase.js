import firebase from "firebase";
// Firebase account with Sample2..

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAPtBsXyaxcAude3JC9OmxtWkkNXBlWjk0",
    authDomain: "sample2-889bf.firebaseapp.com",
    projectId: "sample2-889bf",
    storageBucket: "sample2-889bf.appspot.com",
    messagingSenderId: "786748673986",
    appId: "1:786748673986:web:bdde669900a64361c4905b",
    measurementId: "G-V69QRR7LT3"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
