import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import Axios for API requests

const AddBook = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validation
    const { title, author, genre, description } = formData;
    if (!title || !author || !genre || !description) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      // Make API call to the backend
      const response = await axios.post("/api/books", formData);

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Book added successfully!");
        setFormData({ title: "", author: "", genre: "", description: "" });
      } else {
        setErrorMessage("Failed to add the book. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Add a Book to Our Collection
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Share your favorite books with the community and help others discover
          new stories.
        </motion.p>
      </div>

      {/* Add Book Form */}
      <div className="flex justify-center">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-darkBrown">
            Add a Book
          </h2>

          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter book title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter book author"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter book genre"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter book description"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4A373] text-white py-2 rounded hover:bg-[#CBA267] transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add Book"}
          </button>
        </motion.form>
      </div>

      {/* Information Section */}
      <motion.div
        className="bg-[#f4e3c0] mt-12 p-6 rounded-lg shadow-md mx-auto w-4/5 max-w-4xl border-2 border-[#c9ab8d] hover:shadow-xl hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h3 className="text-xl font-bold text-[#5c4033] mb-4">
          Why Add a Book?
        </h3>
        <p className="text-sm text-[#5c4033]">
          By adding a book to our collection, you're not just sharing a title —
          you're contributing to a vibrant community of readers. Your books can
          inspire, educate, and entertain others. Plus, you can exchange books
          with like-minded enthusiasts and discover new stories in return!
        </p>
        <p className="text-sm text-[#5c4033] mt-2">
          <strong>Note:</strong> You can manage the availability of your books
          anytime through your account.
        </p>
      </motion.div>

      {/* Spacer for scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default AddBook;
