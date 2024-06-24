const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    // first check request headers has authorization or not
    const authorization = req.headers.authorization
    if (!authorization) return res.status(401).json({ error: 'Token NOT Found' });

    // Extract the jwt token from the request header
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        //verify the jwt token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Attach  user info to the request object
        req.user = decoded
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Inavlid Token' });
    }
}

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 500000 });
}

module.exports = { jwtAuthMiddleware, generateToken };