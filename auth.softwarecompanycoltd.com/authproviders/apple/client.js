// ======================================================
// © 2025 Software Company Co., Ltd. All rights reserved.   
// ======================================================
// const msalConfig = {auth:{clientId:'YOUR_CLIENT_ID',authority:'https://login.microsoftonline.com/YOUR_TENANT_ID',redirectUri:'https://yourapp.com/callback'}};const msalInstance = new msal.PublicClientApplication(msalConfig); const loginRequest = { scopes: ['User.Read'] }; document.getElementById('microsoft').addEventListener('click', () => { msalInstance.loginPopup(loginRequest).then(response => { console.log('Login Successful:', response); const idToken = response.idToken; }).catch(error => { console.error('Login Failed:', error); }); }); const axios = require('axios'); async function getUserData(accessToken) { const response = await axios.get('https://graph.microsoft.com/v1.0/me', { headers: { Authorization: `Bearer ${accessToken}` } }); return response.data; }

const express=require('express');
const bodyParser=require('body-parser');
const axios=require('axios');
const jwt=require('jsonwebtoken');
const app=express();
const PORT=process.env.PORT || 3000;
app.use(bodyParser.json());
const APPLE_CLIENT_ID = 'YOUR_APPLE_CLIENT_ID';
const APPLE_TEAM_ID = 'YOUR_APPLE_TEAM_ID';
const APPLE_KEY_ID = 'YOUR_APPLE_KEY_ID';
const APPLE_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
YOUR_PRIVATE_KEY
-----END PRIVATE KEY-----`;app.post('/auth/apple',async(req,res)=>{const{code}=req.body;try{const response=await axios.post('https://appleid.apple.com/auth/token',null,{params:{grant_type:'authorization_code',code,client_id:APPLE_CLIENT_ID,client_secret:generateClientSecret(),},});const{id_token}=response.data;const decoded=jwt.verify(id_token,APPLE_PUBLIC_KEY,{algorithms:['ES256']});res.json({success:true,user:decoded});}catch(error){console.error('an is Error accur during the Apple authentication Process:',error);res.status(500).json({success:false,error:'Authentication failed'});}});function generateClientSecret(){const header={alg:'ES256',kid:APPLE_KEY_ID,};const claims={iss:APPLE_TEAM_ID,iat: Math.floor(Date.now()/1000),exp: Math.floor(Date.now()/1000)+15777000,aud:'https://appleid.apple.com',sub:APPLE_CLIENT_ID,};const token=jwt.sign(claims,APPLE_PRIVATE_KEY,{algorithm:'ES256',header});return token;}app.listen(PORT,()=>{console.log(`Server is running on https://softwarecompanycoltd.pages.dev/:${PORT}`);});

