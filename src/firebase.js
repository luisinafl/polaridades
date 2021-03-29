import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbWbGMSBbozwg1xQV2IU3Y0Bmxy0xZXkA",
    authDomain: "polaridades-ab6ee.firebaseapp.com",
    projectId: "polaridades-ab6ee",
    storageBucket: "polaridades-ab6ee.appspot.com",
    messagingSenderId: "319504274627",
    appId: "1:319504274627:web:0345214e18237b7cdb7e76"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;