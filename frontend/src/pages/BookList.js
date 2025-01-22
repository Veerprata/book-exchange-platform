import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const BookList = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("'https://book-exchange-platform-54oz.vercel.app/api/books'");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-b from-[#a57f5f] to-[#d2b48c]"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(180, 140, 100, 0.2), 
          rgba(140, 100, 60, 0.9)
        )`,
        transition: "background 0.3s ease",
      }}
    >
      {/* Title and Subtitle */}
      <div className="pt-28 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Explore Our Collection
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Browse through a curated list of timeless classics and modern favorites.
        </motion.p>
      </div>

      {/* Book Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-10">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="bg-creamWhite w-64 h-auto rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 1, ease: "easeInOut" }}
          >
            <h3 className="text-lg font-semibold text-darkBrown mb-2">
              {book.title}
            </h3>
            <p className="text-sm text-darkBrown mb-4">by {book.author}</p>
            {book.description ? (
              <button
                className="text-[#D4A373] hover:underline cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                Read More
              </button>
            ) : (
              <p className="text-sm text-gray-500">No description available</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Book Description Modal */}
      {selectedBook && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <motion.div
      className="bg-[#f5e6ca] border-4 border-[#d4a373] rounded-lg shadow-lg w-3/4 max-w-lg p-6 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <button
        className="absolute top-3 right-3 text-[#5c4033] hover:text-[#d4a373] font-bold text-xl"
        onClick={() => setSelectedBook(null)}
      >
        &times;
      </button>
      <h2 className="text-3xl font-serif text-[#5c4033] mb-4">
        {selectedBook.title}
      </h2>
      <p className="text-lg font-semibold text-[#8b5a2b] mb-2">
        Author: {selectedBook.author}
      </p>
      <p className="text-md text-[#5c4033] leading-relaxed">
        {selectedBook.description}
      </p>
    </motion.div>
  </div>
)}

    </div>
  );
};

export default BookList;
