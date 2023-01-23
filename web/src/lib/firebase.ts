import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxQY2VFMjv8pxREG4Zi4JNyF13XBAt-1Q",
  authDomain: "habits-e8759.firebaseapp.com",
  projectId: "habits-e8759",
  storageBucket: "habits-e8759.appspot.com",
  messagingSenderId: "422878035079",
  appId: "1:422878035079:web:eec58b5850cc1e6c814c22"
};

const firebase = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebase);
export const firebaseFirestore = getFirestore(firebase);