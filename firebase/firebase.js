// Import from firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Declare new data firebase 
const firebaseConfig = {
    apiKey: "AIzaSyDdZ72TL0Rn4QDk-a7FjQIPBB-clh8OrWw",
    authDomain: "huan-sa-hsu-baas.firebaseapp.com",
    databaseURL: "https://huan-sa-hsu-baas-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "huan-sa-hsu-baas",
    storageBucket: "huan-sa-hsu-baas.appspot.com",
    messagingSenderId: "902577170013",
    appId: "1:902577170013:web:aab9f71ae5f8d68c758fb4",
    measurementId: "G-N5ZC248SL3"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();