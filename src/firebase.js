import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCghRdnG9gX-KKnvOeJ-gCL3GrlJEO_eXc",
    authDomain: "munasabti-32684.firebaseapp.com",
    projectId: "munasabti-32684",
    storageBucket: "munasabti-32684.appspot.com",
    messagingSenderId: "34886735707",
    appId: "1:34886735707:web:e33b42df0c30cd256fec7e"
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