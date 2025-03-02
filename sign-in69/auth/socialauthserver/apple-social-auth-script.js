// export class AppComponent {
    // auth = firebase.auth();

    // async signInWithApple() {
        // const provider = new firebase.auth.OAuthProvider('apple.com');

        // const result = await this.auth.signInWithPopup(provider);

        // console.log(result.user);
        
    // }
// }

// Initialize Apple Sign-In
AppleID.auth.init({
    clientId: 'com.example.yourapp', // Your app’s client ID
    scope: 'name email', // Requested user data
    redirectURI: 'https://yourapp.com/callback', // Your redirect URL
    usePopup: true // Open in a popup instead of redirecting
});

// Add click event listener to the Apple login button
document.getElementById('apple-login').addEventListener('click', () => {
    // Start the sign-in process when the button is clicked
    AppleID.auth.signIn()
        .then(response => {
            console.log(response); // Log the response (identity token, user details)
            
            // Optional: Send the response to your backend for verification
            // axios.post('/your-backend-endpoint', response);
        })
        .catch(error => {
            console.error('Sign-in failed:', error); // Handle errors
        });
});
