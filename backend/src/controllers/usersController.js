const User = require("../models/User");
const Book = require("../models/Book");

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    const books = await Book.find({ user: req.user.id }); // Fetch books added by this user

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ user, books });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile.", error });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;

    const updatedUser = await user.save();
    res.status(200).json({
      message: "Profile updated successfully!",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile.", error });
  }
};
