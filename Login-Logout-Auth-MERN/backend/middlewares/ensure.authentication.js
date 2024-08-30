const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized: TOKEN is required"
        });
    }
    // Type Bearer before testing api first 
    const token = authHeader.split(' ')[1]; // Assuming "Bearer <token>"
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized: TOKEN is wrong or expired"
        });
    }
};

module.exports = { ensureAuthenticated };
