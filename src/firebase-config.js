import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD4INTLQ5ledpVE25vEUqqpE_ZU9rhbRJM",
    authDomain: "formulario-c80de.firebaseapp.com",
    databaseURL: "https://formulario-c80de-default-rtdb.firebaseio.com",
    projectId: "formulario-c80de",
    storageBucket: "formulario-c80de.appspot.com",
    messagingSenderId: "256067515261",
    appId: "1:256067515261:web:3549c13a9d234eff9b5214",
}

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
