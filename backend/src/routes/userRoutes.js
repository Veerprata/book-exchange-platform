const express = require('express');
const User = require('../models/User'); // Import the User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Import JWT


const router = express.Router();

// Placeholder for user registration
// User Registration
router.post('/register', async (req, res) => {
    console.log('POST /register called');
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Respond with token and user data
        res.status(200).json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
