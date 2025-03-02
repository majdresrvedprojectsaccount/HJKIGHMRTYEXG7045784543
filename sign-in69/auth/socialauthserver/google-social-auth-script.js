
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACvRuhCkxk9lNrweXU14MUytOG_muxAFg",
  authDomain: "software-company-oauth-db.firebaseapp.com",
  databaseURL: "https://software-company-oauth-db-default-rtdb.firebaseio.com",
  projectId: "software-company-oauth-db",
  storageBucket: "software-company-oauth-db.firebasestorage.app",
  messagingSenderId: "976995041868",
  appId: "1:976995041868:web:2eceaa048c433a5724eae9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./logged.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.photoURL;

    document.getElementById('userName').textContent = userName;
    document.getElementById('userEmail').textContent = userEmail;
    document.getElementById('userProfilePicture').textContent = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account & login");
        window.location.href = "/register.html";
    }
});