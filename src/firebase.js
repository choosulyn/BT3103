import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details

    apiKey: "AIzaSyDWEsTvJANAXhyicjXhmVzbPtvQyylWHVk",
    authDomain: "bt3103-30b6d.firebaseapp.com",
    databaseURL: "https://bt3103-30b6d.firebaseio.com",
    projectId: "bt3103-30b6d",
    storageBucket: "bt3103-30b6d.appspot.com",
    messagingSenderId: "377447018421",
    appId: "1:377447018421:web:ce44bc6121580c7a2233fc",
    measurementId: "G-115YC6YJ5R"
  
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;