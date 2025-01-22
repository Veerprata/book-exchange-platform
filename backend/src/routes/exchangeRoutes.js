const express = require("express");
const {
  sendExchangeRequest,
  getIncomingRequests,
  getSentRequests,
  respondToRequest,
} = require("../controllers/exchangeController");
const { protect } = require("../middleware/authMiddleware"); // Correctly destructuring the protect function

const router = express.Router();

// Protected routes
router.post("/request", protect, sendExchangeRequest); // Send an exchange request
router.get("/incoming", protect, getIncomingRequests); // Get incoming requests
router.get("/sent", protect, getSentRequests); // Get sent requests
router.put("/respond", protect, respondToRequest); // Respond to a request

module.exports = router;
