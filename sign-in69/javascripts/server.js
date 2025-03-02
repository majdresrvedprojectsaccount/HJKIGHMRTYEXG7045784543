// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACvRuhCkxk9lNrweXU14MUytOG_muxAFg",
  authDomain: "software-company-oauth-db.firebaseapp.com",
  projectId: "software-company-oauth-db",
  storageBucket: "software-company-oauth-db.firebasestorage.app",
  messagingSenderId: "976995041868",
  appId: "1:976995041868:web:2eceaa048c433a5724eae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

// set up our login function
function login () {
  // get all our input fields
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  // validate input fiels
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password Incorrect')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Add this user to Firebase Database
    var database_ref = database.ref()
  
    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data)
    alert('User Logged Successfully!')
    
  })
  .catsh(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is Good
    return true
  } else {
    // Email is not Good
    return false
  }
}

function validate_password(password) {
  // firebase only accepts length greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field === null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}