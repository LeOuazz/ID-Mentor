// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'XXX',
    authDomain: 'XXX.firebaseapp.com',
    projectId: 'XXX',
    storageBucket: 'XXX.appspot.com',
    messagingSenderId: 'XXX',
    appId: '1:XXX:web:XXX'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
