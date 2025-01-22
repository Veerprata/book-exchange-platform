import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fetch user data on mount
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/users/profile");
        setUserData(data);
        setFormData({ name: data.name, email: data.email });
        setLoading(false);
      } catch (err) {
        setError("Failed to load user data.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

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

  const handleProfileUpdate = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      await axios.put("/api/users/profile", formData);
      setUserData({ ...userData, ...formData });
      setSuccess("Profile updated successfully.");
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = (bookId) => {
    setUserData({
      ...userData,
      books: userData.books.filter((book) => book.id !== bookId),
    });
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 140, 100, 0.2), rgba(140, 100, 60, 0.9))`,
        transition: "background 0.3s ease",
        paddingTop: "6rem",
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.h1
        className="text-5xl font-bold text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to Your Profile
      </motion.h1>

      {/* User Information */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-12 max-w-2xl mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Profile</h2>
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {success && <p className="text-center text-green-500">{success}</p>}
        {userData && (
          <>
            {isEditing ? (
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded mb-4"
                />
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded mb-4"
                />
                <button
                  className="bg-[#D4A373] text-white py-2 px-4 rounded hover:bg-[#CBA267] mr-4"
                  onClick={handleProfileUpdate}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="text-center">
                <p className="mb-2 text-lg">Name: {userData.name}</p>
                <p className="mb-4 text-lg">Email: {userData.email}</p>
                <button
                  className="bg-[#D4A373] text-white py-2 px-4 rounded hover:bg-[#CBA267] transition-all duration-300"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* User Books */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Your Books</h2>
        {userData && userData.books && userData.books.length > 0 ? (
          <motion.ul
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {userData.books.map((book) => (
              <motion.li
                key={book.id}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                <p className="text-sm mb-1">Author: {book.author}</p>
                <p className="text-sm mb-1">Genre: {book.genre}</p>
                <p className="text-sm mb-4">Description: {book.description}</p>
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-[#D4A373] text-white py-1 px-3 rounded hover:bg-[#CBA267] transition-all duration-300"
                    onClick={() => alert(`Update functionality for ${book.title}`)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-all duration-300"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <p className="text-center text-gray-600">No books added yet. Start adding your favorite books!</p>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePage;
