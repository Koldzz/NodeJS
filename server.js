const express = require('express');
const app = express();
const db = require('./db'); // Ensure this correctly initializes the MongoDB connection

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send("Hello");
});

// Import routes
const personRoutes = require('./routes/personRoutes'); // Correct path
const menuRoutes = require('./routes/menuRoutes'); // Correct path

// Mount routes
app.use('/person', personRoutes); // Mount person routes
app.use('/menu', menuRoutes);     // Mount menu routes

// Start the server
app.listen(3000, () => {
    console.log('Server has started on http://localhost:3000');
});
