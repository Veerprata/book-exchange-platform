 
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const Book = require('./models/Book');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');



// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

console.log('Models loaded successfully');

//Defining Routing.

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);



// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
