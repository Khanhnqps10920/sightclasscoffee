import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZ6atyWuAfWaHXfCZDjRHdVnOC3uTz5bk",
    authDomain: "sightglass-c68fc.firebaseapp.com",
    databaseURL: "https://sightglass-c68fc.firebaseio.com",
    projectId: "sightglass-c68fc",
    storageBucket: "sightglass-c68fc.appspot.com",
    messagingSenderId: "801696359664",
    appId: "1:801696359664:web:9af49f81da9605a64e4e35",
    measurementId: "G-9VJBD2RFEZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebaseApp.firestore();