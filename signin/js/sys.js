require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

// API Endpoint to Fetch Data Using the API Key
app.get('/api/data', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY; // Securely fetch API key
        const response = await axios.get('https://example.com/api', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        res.json(response.data); // Send data to frontend
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
