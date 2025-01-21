import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
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
      {/* Header Section */}
      <div className="pt-28 pb-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          We’re here to help and answer any questions you might have. Let’s
          connect!
        </motion.p>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center">
        <motion.form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-darkBrown">
            Contact Us
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Subject</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4A373] text-white py-2 rounded hover:bg-[#CBA267] transition-all"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Location Map */}
      <motion.div
        className="bg-[#f4e3c0] mt-12 p-6 rounded-lg shadow-md mx-auto w-4/5 max-w-4xl border-2 border-[#c9ab8d] hover:shadow-xl hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h3 className="text-xl font-bold text-[#5c4033] mb-4">Our Location</h3>
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.95373631532103!3d-37.81627937975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f3f2a1d1b64!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1612320206551!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="bg-white mt-12 p-6 rounded-lg shadow-md mx-auto w-4/5 max-w-4xl border-2 border-[#c9ab8d] hover:shadow-xl hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h3 className="text-xl font-bold text-[#5c4033] mb-4">FAQs</h3>
        <div>
          <details className="mb-3">
            <summary className="font-semibold">How can I contact support?</summary>
            <p className="mt-2 text-sm text-[#5c4033]">
              You can reach out via the form above, or email us at
              support@example.com.
            </p>
          </details>
          <details className="mb-3">
            <summary className="font-semibold">What are your working hours?</summary>
            <p className="mt-2 text-sm text-[#5c4033]">
              Our support team is available from 9:00 AM to 5:00 PM, Monday to
              Friday.
            </p>
          </details>
          <details className="mb-3">
            <summary className="font-semibold">Where are you located?</summary>
            <p className="mt-2 text-sm text-[#5c4033]">
              We are located at Melbourne, VIC, Australia.
            </p>
          </details>
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="flex justify-center mt-12 space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4267B2] hover:scale-110 transition-transform"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DA1F2] hover:scale-110 transition-transform"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077B5] hover:scale-110 transition-transform"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Spacer for scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default ContactUs;
