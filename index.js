const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
