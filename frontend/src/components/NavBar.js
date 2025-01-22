import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { FaUserCircle } from "react-icons/fa"; // Import icon for Profile

const Navbar = () => (
  <motion.nav
    className="bg-[#5c4033] bg-opacity-90 p-4 shadow-md fixed top-0 w-full z-50"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="container mx-auto flex justify-between items-center">
      {/* Platform Title */}
      <h1 className="text-white text-2xl font-bold">
        <Link to="/">BookBridge</Link>
      </h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105 uppercase"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105 uppercase"
          >
            BOOK LIST
          </Link>
        </li>
        <li>
          <Link
            to="/add-book"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105 uppercase"
          >
            ADD BOOK
          </Link>
        </li>
        <li>
          <Link
            to="/exchange"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105 uppercase"
          >
            EXCHANGE
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105 uppercase"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105 uppercase"
          >
            CONTACT US
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="text-white hover:text-[#e2c5a8] transition-all duration-300 hover:scale-105"
          >
            <FaUserCircle size={24} />
          </Link>
        </li>
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;
