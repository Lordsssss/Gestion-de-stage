const jwt = require('jsonwebtoken');
require("dotenv").config();

// Middleware function to check JWT token
function verifyToken(req, res, next) {
  // Get the token from the header or body
  const token = req.headers['authorization'] || req.body.token;

  if (!token) {
    // If token not present, return an error response
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // If token invalid, return an error response
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Store the decoded token in the request object
    req.decoded = decoded;
    next(); // Call the next middleware function
  });
}

module.exports = {
    verifyToken
  };