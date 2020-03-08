import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
export var firebaseConfig = {
    apiKey: "AIzaSyA2SPfgb6wRj-RIwT2F5JopT4QQR55FZ6Q",
    authDomain: "work-show-394f6.firebaseapp.com",
    databaseURL: "https://work-show-394f6.firebaseio.com",
    projectId: "work-show-394f6",
    storageBucket: "work-show-394f6.appspot.com",
    messagingSenderId: "743313364001",
    appId: "1:743313364001:web:7e5f0df734b9dd30763f60"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth(); //authentication
  export const db = firebase.firestore(); //firestore
