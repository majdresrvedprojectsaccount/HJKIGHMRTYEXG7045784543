// export class AppComponent {
    // auth = firebase.auth();

    // async signInWithApple() {
        // const provider = new firebase.auth.OAuthProvider('apple.com');

        // const result = await this.auth.signInWithPopup(provider);

        // console.log(result.user);
        
    // }
// }


AppleID.auth.init({
    clientId: 'com.example.yourapp', // Your app’s client ID
    scope: 'name email', // Requested user data
    redirectURI: 'https://yourapp.com/callback', // Your redirect URL
    usePopup: true // To open in a popup instead of redirecting
});

document.getElementById('apple-login').addEventListener('click', () => {
    async function verifyAppleToken(token) {
        const response = await axios.get('https://appleid.apple.com/auth/keys');
        const keys = response.data.keys;
        const jwt = require('jsonwebtoken');
        const axios = require('axios');
    
        // Use the keys to verify the JWT (identity token)
        const decodedToken = jwt.verify(token, keys[0], { algorithms: ['RS256'] }); 
        return decodedToken;
    }
});

AppleID.auth.signIn().then(response => {
    console.log(response); // Send this response to your backend for verification
}).catch(error => {
    console.error(error);
});
