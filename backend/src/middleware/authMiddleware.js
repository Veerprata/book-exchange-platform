const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.header('Authorization'); // Expecting "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user info to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = { protect };
