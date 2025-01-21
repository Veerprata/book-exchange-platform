/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure paths to your files are correct
  ],
  theme: {
    extend: {
      colors: {
        warmBrown: '#8B5A2B',
        deepBeige: '#D2B48C',
        goldenBrown: '#D4A373',
        subtleGold: '#CBA267',
        darkBrown: '#3E2723',
        creamWhite: '#FFF8E7',
      },
      boxShadow: {
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        gradientMove: "gradientShift 10s ease infinite", // Gradient animation
        typewriter: "typing 4s steps(40, end) infinite", // Typewriter animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        gradientShift: { // Gradient keyframes
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        typing: { // Typewriter keyframes
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      zIndex: {
        '-10': '-10', // Particles layer
        '0': '0',     // Default background
        '10': '10',   // Content
        '50': '50',   // Navbar
      },
    },
    container: {
      center: true, // Center the container by default
      padding: '0', // Remove default padding from the container
    },
  },
  plugins: [require("tailwindcss-animate")],
};
