import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARYA9u6SUUqWZM7GHBOtN8kU9nwPJ9dnc",
  authDomain: "spending-tracker-653d2.firebaseapp.com",
  databaseURL: "https://spending-tracker-653d2.firebaseio.com",
  projectId: "spending-tracker-653d2",
  storageBucket: "spending-tracker-653d2.appspot.com",
  messagingSenderId: "142508199294"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
