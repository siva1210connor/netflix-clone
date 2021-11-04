import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPi6dQP_cHbQpHuwbArNYBHJrdKMcPxR8',
  authDomain: 'netflix-7558f.firebaseapp.com',
  projectId: 'netflix-7558f',
  storageBucket: 'netflix-7558f.appspot.com',
  messagingSenderId: '219106328762',
  appId: '1:219106328762:web:16a8b352c91f1004968283',
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
