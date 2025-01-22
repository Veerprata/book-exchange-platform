const Exchange = require("../models/Exchange");

// Send an exchange request
exports.sendExchangeRequest = async (req, res) => {
  try {
    const { recipient, requesterBook, recipientBook } = req.body;

    const exchange = new Exchange({
      requester: req.user.id,
      recipient,
      requesterBook,
      recipientBook,
      status: "Pending", // Explicitly set status
    });

    await exchange.save();
    res.status(201).json({ message: "Exchange request sent!", exchange });
  } catch (error) {
    console.error("Error in sendExchangeRequest:", error);
    res.status(500).json({ message: "Failed to send exchange request.", error: error.message });
  }
};

// Get incoming exchange requests
exports.getIncomingRequests = async (req, res) => {
  try {
    const requests = await Exchange.find({ recipient: req.user.id })
      .populate("requester", "name email")
      .populate("requesterBook")
      .populate("recipientBook");
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error in getIncomingRequests:", error);
    res.status(500).json({ message: "Failed to fetch incoming requests.", error: error.message });
  }
};

// Get sent exchange requests
exports.getSentRequests = async (req, res) => {
  try {
    const requests = await Exchange.find({ requester: req.user.id })
      .populate("recipient", "name email")
      .populate("requesterBook")
      .populate("recipientBook");
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error in getSentRequests:", error);
    res.status(500).json({ message: "Failed to fetch sent requests.", error: error.message });
  }
};

// Respond to an exchange request
exports.respondToRequest = async (req, res) => {
  try {
    const { exchangeId, status } = req.body;

    if (!["Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }

    const exchange = await Exchange.findById(exchangeId);

    if (!exchange) {
      return res.status(404).json({ message: "Exchange request not found." });
    }

    if (exchange.recipient.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to respond to this request." });
    }

    exchange.status = status;
    await exchange.save();

    res.status(200).json({ message: `Exchange request ${status.toLowerCase()}!`, exchange });
  } catch (error) {
    console.error("Error in respondToRequest:", error);
    res.status(500).json({ message: "Failed to respond to exchange request.", error: error.message });
  }
};
