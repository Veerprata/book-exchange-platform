import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProfilePage from "./pages/ProfilePage"; // Import ProfilePage
import ExchangePage from "./pages/ExchangePage"; // Ensure correct path



const PageTransitionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransitionWrapper>
              <Home />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransitionWrapper>
              <Login />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <PageTransitionWrapper>
              <Register />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/books"
          element={
            <PageTransitionWrapper>
              <BookList />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/add-book"
          element={
            <PageTransitionWrapper>
              <AddBook />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageTransitionWrapper>
              <AboutUs />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PageTransitionWrapper>
              <ContactUs />
            </PageTransitionWrapper>
          }
        />
        <Route
         path="/profile"
         element={
          <PageTransitionWrapper>
            <ProfilePage />
          </PageTransitionWrapper>
          }
        />
        <Route
         path="/exchange"
         element={
          <PageTransitionWrapper>
            <ExchangePage />
          </PageTransitionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <div className="min-h-screen">
      <Navbar />
      <AnimatedRoutes />
    </div>
  </Router>
);

export default App;
