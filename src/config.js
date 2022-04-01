import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPwK4Gc-WGupZIJgUpRzymW-vTz-eh294",
    authDomain: "react-firebase9-851d9.firebaseapp.com",
    projectId: "react-firebase9-851d9",
    storageBucket: "react-firebase9-851d9.appspot.com",
    messagingSenderId: "618624375368",
    appId: "1:618624375368:web:9daf9149aef9152755567d"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

//init services
export const db = getFirestore();

//collection reference
const colRef = collection(db, 'books');

//get collection data
getDocs(colRef).then(docs => {
    console.log(docs);
});