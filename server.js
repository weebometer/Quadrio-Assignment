const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Example route
app.get('/api/cars', (req, res) => {
    res.json([{ name: 'Toyota', year: 2020, price: 20000 }]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
