// Import the required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACvRuhCkxk9lNrweXU14MUytOG_muxAFg",
  authDomain: "software-company-oauth-db.firebaseapp.com",
  projectId: "software-company-oauth-db",
  storageBucket: "software-company-oauth-db.appspot.com",
  messagingSenderId: "976995041868",
  appId: "1:976995041868:web:2eceaa048c433a5724eae9",
  databaseURL: "https://console.firebase.google.com/u/0/project/software-company-oauth-db/database/software-company-oauth-db-default-rtdb/data/~2F"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Login function
async function login() {
  // Get input values
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Validate input fields
  if (!validateEmail(email) || !validatePassword(password)) {
    alert('Please enter a valid email and password.');
    return;
  }

  try {
    // Authenticate user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user login data to the database
    const databaseRef = ref(database, `users/${user.uid}`);
    await set(databaseRef, {
      lastLogin: new Date().toISOString()
    });

    alert('Login successful! Welcome back.');
  } catch (error) {
    // Handle errors
    console.error('Error during login:', error);
    alert(error.message);
  }
}

// Validate email
function validateEmail(email) {
  const regex = /^[^@]+@\w+(\.\w+)+\w$/;
  return regex.test(email);
}

// Validate password (basic validation for length)
function validatePassword(password) {
  return password.length >= 6; // Example: password must be at least 6 characters
}

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the form from refreshing the page
  console.log('Form submission prevented!');
});

// Event listener for login button
document.getElementById('loginButton').addEventListener('click', login);
