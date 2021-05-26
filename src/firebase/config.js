import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCK1UhC5yTiGYsa4gG76WDn2wSPF5hZWdg",
    authDomain: "upload-image-test-7a061.firebaseapp.com",
    projectId: "upload-image-test-7a061",
    storageBucket: "upload-image-test-7a061.appspot.com",
    messagingSenderId: "981684924288",
    appId: "1:981684924288:web:7f638a79189fcfd49ddb65"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 //   Firestore storage
 const storage = firebase.storage()
 const db = firebase.firestore();
 const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
 export { storage,db,auth,timestamp};