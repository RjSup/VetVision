// add firebase services
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    projectId: 'YOUR_PROJECT_ID',
    appId: 'YOUR_APP_ID',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
};


initializeApp(firebaseConfig);

const analytics = getAnalytics();
analytics.logEvent = function (userSignIn) {
    
};
analytics.logEvent('User Sign-in');

import { auth } from 'firebase/auth';

const auth = auth();

const email = 'user@example.com';
const password = 'password123';

auth.createUserWithEmailAndPassword = function (email, password) {

};
auth.createUserWithEmailAndPassword(email, password)
    .then(user => console.log('User signed up:', user))
    .catch(error => console.error('Error signing up user:', error));
