const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const Book = require('./models/Book');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const exchangeRoutes = require('./routes/exchangeRoutes'); // Import exchange routes

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Log confirmation
console.log('Models loaded successfully');

// Routing
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/exchange', exchangeRoutes); // Register exchange routes

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Use Vercel's dynamic port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for Vercel
