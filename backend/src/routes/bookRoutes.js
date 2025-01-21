const express = require('express');
const Book = require('../models/Book'); // Import the Book model
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new book (requires authentication)
router.post('/', protect, async (req, res) => {
    const { title, author, genre, description } = req.body; // Added description

    try {
        const newBook = await Book.create({
            title,
            author,
            genre,
            description, // Save the description
            user: req.user.id, // Use the authenticated user's ID
        });

        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get all books (public route)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find().populate('user', 'name email'); // Populate user details
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Update a book (requires authentication)
router.put('/:id', protect, async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, description, available } = req.body; // Added description

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, genre, description, available }, // Update description
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete a book (requires authentication)
router.delete('/:id', protect, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Add a new book (public route)
router.post('/', async (req, res) => {
    const { title, author, genre, description, userId } = req.body; // Added description

    try {
        const newBook = await Book.create({
            title,
            author,
            genre,
            description, // Save the description
            user: userId,
        });

        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find().populate('user', 'name email'); // Populate user details
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Update a book
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, description, available } = req.body; // Added description

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, genre, description, available }, // Update description
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete a book
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
