const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "", // Optional field for the book's description
    },
    available: {
      type: Boolean,
      default: true, // Indicates if the book is available for exchange
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // References the User who owns the book
    },
  },
  {
    timestamps: true,
  }
);

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
