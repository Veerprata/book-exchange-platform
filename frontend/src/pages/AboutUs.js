import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
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
      <div className="pt-28 px-10 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Our Mission
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          At the Book Exchange Platform, our mission is to create a thriving community where readers can discover, share, and exchange books effortlessly.
          We aim to connect people through the love of literature, fostering deeper connections and mutual understanding through stories that inspire and educate.
        </motion.p>
      </div>

      <div className="pt-10 px-10 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Our Vision
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          We envision a world where books transcend boundaries, enabling every reader to explore, learn, and grow. By building an inclusive platform, we aspire to make book-sharing a seamless experience and provide access to a diverse collection of stories for all.
        </motion.p>
      </div>

      <div className="pt-10 px-10 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Core Values
        </motion.h1>
        <motion.ul
          className="list-none mt-4 text-lg text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="mb-4"
          >
            🌍 Community: Bringing together readers from all walks of life, fostering inclusivity, and promoting the joy of reading as a shared experience.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="mb-4"
          >
            ☀️ Accessibility: Making books and literature available to everyone, regardless of their location or circumstances.
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="mb-4"
          >
            💖 Collaboration: Encouraging meaningful exchanges and connections, empowering readers to share knowledge and ideas through books.
          </motion.li>
        </motion.ul>
      </div>

      <div className="pt-10 px-10 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Our Impact
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Over the past year, we have successfully connected thousands of readers, facilitated hundreds of book exchanges, and grown a vibrant community of literature enthusiasts. By sharing stories, our platform has helped individuals form bonds and build lifelong memories.
        </motion.p>
      </div>

      <div className="pt-10 px-10 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Future Vision
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Our goal is to expand our platform, incorporating cutting-edge technology to enhance the book-sharing experience. From personalized recommendations to global connections, we aim to redefine how books are discovered, shared, and cherished in the digital era.
        </motion.p>
      </div>

      <div className="pt-10 px-10 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Join the Community
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Be part of a movement that celebrates the love for books and storytelling. Together, we can create a world where everyone has access to stories that inspire, educate, and entertain. Share your journey, connect with fellow readers, and help build a global network of book lovers.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;
