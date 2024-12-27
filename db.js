const mongoose = require('mongoose');
require('dotenv').config();

// Replace the placeholders with your actual credentials
const mongoURL = process.env.MONGO_URL

mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB is connected');
}).catch((error) => {
    console.error('MongoDB connection error:', error.message);
});

const db = mongoose.connection;

// Event listeners for additional logging
db.on('connected', () => {
    console.log('MongoDB is connected (via event listener)');
});

db.on('disconnected', () => {
    console.log('MongoDB is disconnected');
});

db.on('error', (error) => {
    console.error('MongoDB connection error (via event listener):', error.message);
});

module.exports = db;
