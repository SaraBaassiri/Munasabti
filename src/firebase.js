import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCrgKgGNK6WHAZ7qlqimwhJO3n2FYegWk0",
    authDomain: "goscan-fda61.firebaseapp.com",
    projectId: "goscan-fda61",
    storageBucket: "goscan-fda61.appspot.com",
    messagingSenderId: "323700568738",
    appId: "1:323700568738:web:b43d98f92ef8121aefddfb"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    // eslint-disable-next-line no-unused-vars
    app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
db.settings({ experimentalForceLongPolling: true, merge: true });


export { auth, db, storage, firebase };