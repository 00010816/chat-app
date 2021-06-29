import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC6aMax6dTGm_Vmfl4NfvboWdbFAyzzhAU",
    authDomain: "uchat-887d0.firebaseapp.com",
    projectId: "uchat-887d0",
    storageBucket: "uchat-887d0.appspot.com",
    messagingSenderId: "733306097277",
    appId: "1:733306097277:web:5ec8233b5fc55e29256b14"
}).auth();