import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleGetStartedClick = () => {
    navigate("/login"); // Redirect to the login page on button click
  };

  return (
    <div
      className="relative h-screen w-full bg-gradient-to-b from-[#a57f5f] to-[#d2b48c]"
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
      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 mt-20">
        <motion.h1
          className="text-7xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Welcome to the Book Exchange Platform!
        </motion.h1>
        <motion.p
          className="text-xl mb-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Discover and share books with the community. Whether you're an avid
          reader or a casual explorer, start your journey today!
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-[#D4A373] text-white font-semibold rounded-md hover:bg-[#CBA267] hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStartedClick} // Add click handler to navigate to login
        >
          Get Started
        </motion.button>
      </div>

      {/* Feature Cards */}
      <div className="absolute bottom-20 w-full flex justify-center space-x-6">
        {["Discover Books", "Share Your Collection", "Connect with Enthusiasts"].map(
          (feature, index) => (
            <motion.div
              key={index}
              className="w-64 h-44 bg-creamWhite rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center p-4 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-lg font-semibold text-darkBrown mb-2 drop-shadow-[0_0_5px_rgba(139,90,43,0.8)]">
                {feature}
              </h3>
              <p className="text-sm text-darkBrown text-center">
                {index === 0
                  ? "Browse a vast collection of books from different genres."
                  : index === 1
                  ? "Easily share books with the community and build connections."
                  : "Join a community of like-minded readers and book lovers."}
              </p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
