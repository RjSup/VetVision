// add firebase services

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8r1TwfZib9PcYoWYET0XHHAthY5QZIj4",
    authDomain: "vet-vision.firebaseapp.com",
    projectId: "vet-vision",
    storageBucket: "vet-vision.appspot.com",
    messagingSenderId: "961984954386",
    appId: "1:961984954386:web:781e80b56c618659fb98cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign-in function
function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Sign-in successful, show user information
            showUserInformation();
        })
        .catch((error) => {
            // Sign-in failed, display error message
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error signing in: ${errorCode} - ${errorMessage}`);
        });
}

// Sign-up function
function signup() {
    const name = document.getElementById('name').value;
    const signupEmail = document.getElementById('signupEmail').value;


    const signupPassword = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then(user => {
            // User created successfully, add name to profile
            user.updateProfile({ displayName: name })
                .then(() => {
                    // Update complete, show user information
                    showUserInformation();
                })
                .catch((error) => {
                    // Update failed, display error message
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error updating profile: ${errorCode} - ${errorMessage}`);
                });
        })
        .catch((error))}
