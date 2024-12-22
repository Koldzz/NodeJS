const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB is connected');
});

db.on('disconnected', () => {
    console.log('MongoDB is disconnected');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
});

module.exports = db;
