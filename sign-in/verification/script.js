
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWRTng4O10IP20rAOCBXT-1t5UZVCEqKA",
    authDomain: "project-7691f.firebaseapp.com",
    projectId: "project-7691f",
    storageBucket: "project-7691f.appspot.com",
    messagingSenderId: "94778615303",
    appId: "1:94778615303:web:2a22677e90f990d3d82ca2",
    measurementId: "G-80YPW07Q8J"
};
// initializing firebase SDK
firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for send OTP
function sendOTP() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.querySelector('.number-input').style.display = 'none';
        document.querySelector('.verification').style.display = '';
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
}

// function for OTP verify
function verifyCode() {
    var code = document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function () {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.result').style.display = '';
        document.querySelector('.correct').style.display = '';
        console.log('OTP Verified');
    }).catch(function () {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.result').style.display = '';
        document.querySelector('.incorrect').style.display = '';
        console.log('OTP Not correct');
    })
}
