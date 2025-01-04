// ms social auth client id : f8cdef31-a31e-4b4a-93e4-5f571e91255a 

const msalConfig = {
    auth: {
        clientId: 'YOUR_CLIENT_ID', // Application (client) ID
        authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Tenant ID or common for multi-tenants
        redirectUri: 'https://yourapp.com/callback' // Your redirect URL
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

const loginRequest = {
    scopes: ['User.Read'] // Scopes for the token
};

document.getElementById('apple-login').addEventListener('click', () => {
    msalInstance.loginPopup(loginRequest).then(response => {
        console.log('Login Successful:', response);
        // Send the ID token to your backend
        const idToken = response.idToken;
    }).catch(error => {
        console.error('Login Failed:', error);
    });
});

const axios = require('axios');

async function getUserData(accessToken) {
    const response = await axios.get('https://graph.microsoft.com/v1.0/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
}
