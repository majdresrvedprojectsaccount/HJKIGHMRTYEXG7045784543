// Your GitHub OAuth configuration
const clientId = "Ov23liAogrdx0uFc4LVM"; // Replace with your GitHub App Client ID
const redirectUri = "https://sites.google.com/view/software-company-co-ltd/sign-in/"; // Replace with your redirect URI

// GitHub OAuth URL
const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:user`;

// Handle the login button click
document.getElementById("github-login").addEventListener("click", () => {
    // Redirect the user to GitHub's OAuth login page
    window.location.href = githubAuthUrl;
});

const express = require('express');
const axios = require('axios');
const app = express();

app.get('https://sites.google.com/view/software-company-co-ltd/sign-in/', async (req, res) => {
  const code = req.query.code; // The code GitHub sent to your redirect_uri
  const clientId = 'Ov23liAogrdx0uFc4LVM';
  const clientSecret = '88346ee0316b3f43c8d01483d68131a04c62676d';

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }, {
      headers: { 'Accept': 'application/json' }
    });

    const accessToken = tokenResponse.data.access_token;

    // Use the token to fetch user information from GitHub's API
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const user = userResponse.data;
    res.json({ message: 'Login successful!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication failed.' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));