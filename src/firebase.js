import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqTzo-Dw0BRpn-CtcoMKwBTinuyMcw05w",
    authDomain: "musik-festival.firebaseapp.com",
    projectId: "musik-festival",
    storageBucket: "musik-festival.appspot.com",
    messagingSenderId: "926170899503",
    appId: "1:926170899503:web:a2fc0c1a26737b463e92da",
    measurementId: "G-2RSJLKW2FP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;