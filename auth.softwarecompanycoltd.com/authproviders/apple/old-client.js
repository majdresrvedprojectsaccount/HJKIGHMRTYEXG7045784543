// ====================================================== //
// © 2025 Software Company Co., Ltd. All rights reserved. //
// This Javascript is protected by copyright law.         //
// Unauthorized use or distribution is prohibited.        //
// ====================================================== //
// AppleID.auth.init({clientId:"com.example.yourapp",scope:"name email",redirectURI:"https://yourapp.com/callback",usePopup:!0}),document.getElementById("apple").addEventListener("click",(()=>{})),AppleID.auth.signIn().then((e=>{console.log(e)})).catch((e=>{console.error(e)})); export class AppComponent { auth = firebase.auth(); async signInWithApple() { const provider = new firebase.auth.OAuthProvider('apple.com'); const result = await this.auth.signInWithPopup(provider); console.log(result.user); } }
