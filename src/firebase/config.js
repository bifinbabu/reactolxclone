import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN4qzjgaAnIteJHdszwVwBanCrQ3tVIiM",
    authDomain: "olx-clone-c5480.firebaseapp.com",
    projectId: "olx-clone-c5480",
    storageBucket: "olx-clone-c5480.appspot.com",
    messagingSenderId: "25138112152",
    appId: "1:25138112152:web:d8f430e03269d61ad792ed",
    measurementId: "G-PDSZ1Q0LME"
  };

export default firebase.initializeApp(firebaseConfig)