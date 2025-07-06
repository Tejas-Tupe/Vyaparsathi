import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : null;

  if (!token || token === "null" || token === "undefined") {
    return res.status(401).json({ 
      success: false,
      message: 'You must be logged in.'
    });
  }

  try {
    // ✅ Only use the token you already extracted
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.user = decoded.id; // assuming you're saving { id: userId } in token
    next(); // allow access
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token. Please log in again.'
    });
  }
};

export default protect;
