const jwt = require('jsonwebtoken');
const User = require('../Modals/user');

const auth = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        const decode = jwt.verify(token, 'Its_My_Super_Key');
        req.user = await User.findById(decode.userId).select('-password');

        if (!req.user) {
            return res.status(401).json({ error: 'User not found' });
        }

        next();
    } catch (err) {
        console.error("Token verification failed:", err.message);
        res.status(401).json({ error: 'Token is not valid' });
    }
};

module.exports = auth;
