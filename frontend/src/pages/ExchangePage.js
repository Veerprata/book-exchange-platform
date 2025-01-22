import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ExchangePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const incoming = await axios.get("/api/exchange/incoming");
        const sent = await axios.get("/api/exchange/sent");
        setIncomingRequests(incoming.data);
        setSentRequests(sent.data);
      } catch (err) {
        setError("Failed to load exchange requests.");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleAcceptRequest = async (requestId) => {
    try {
      await axios.put("/api/exchange/respond", { exchangeId: requestId, status: "Accepted" });
      setIncomingRequests(incomingRequests.filter((request) => request._id !== requestId));
    } catch (err) {
      setError("Failed to accept request.");
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      await axios.put("/api/exchange/respond", { exchangeId: requestId, status: "Rejected" });
      setIncomingRequests(incomingRequests.filter((request) => request._id !== requestId));
    } catch (err) {
      setError("Failed to reject request.");
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
      <div className="pt-28 px-10 pb-10 text-center">
        {/* Page Title */}
        <motion.h1
          className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Exchange Requests
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          This page allows you to manage book exchange requests. Review incoming requests from other users or check the status of requests you’ve sent. Exchange books and enjoy a collaborative reading experience!
        </motion.p>

        {loading && <p className="text-center text-gray-500 mt-8">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-8">{error}</p>}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Incoming Requests Feature Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold text-[#5c4033] mb-4">Incoming Requests</h2>
            <div className="mt-4 space-y-6">
              {incomingRequests.length > 0 ? (
                incomingRequests.map((request) => (
                  <motion.div
                    key={request._id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-lg font-bold">{request.requesterBook.title}</h3>
                    <p className="text-sm">Requested by: {request.requester.name}</p>
                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                        onClick={() => handleAcceptRequest(request._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                        onClick={() => handleRejectRequest(request._id)}
                      >
                        Reject
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500">No incoming requests.</p>
              )}
            </div>
          </motion.div>

          {/* Sent Requests Feature Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold text-[#5c4033] mb-4">Sent Requests</h2>
            <div className="mt-4 space-y-6">
              {sentRequests.length > 0 ? (
                sentRequests.map((request) => (
                  <motion.div
                    key={request._id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-lg font-bold">{request.recipientBook.title}</h3>
                    <p className="text-sm">Status: {request.status}</p>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500">No sent requests.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
