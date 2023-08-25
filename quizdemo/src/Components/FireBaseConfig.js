// src/firebaseConfig.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDYAQX0JtBn45jR-OOiUNcXTN4fggjpODE",
    authDomain: "storingquiz.firebaseapp.com",
    databaseURL: "https://storingquiz-default-rtdb.firebaseio.com",
    projectId: "storingquiz",
    storageBucket: "storingquiz.appspot.com",
    messagingSenderId: "816326310890",
    appId: "1:816326310890:web:bf5efb7879d710563d9093",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
