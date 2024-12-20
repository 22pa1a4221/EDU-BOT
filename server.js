// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/search', async (req, res) => {
    const searchTerm = req.query.q;
    try {
        // You can customize the API endpoint and parameters based on your needs
        const response = await axios.get(`https://api.example.com/search?query=${searchTerm}`);
        const searchData = response.data;
        res.json(searchData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
