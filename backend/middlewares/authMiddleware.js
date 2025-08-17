const { expressjwt } = require('express-jwt')
const dotenv = require('dotenv');

dotenv.config();

const authenticateToken = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'user',
    getToken: (req) => req.headers.authorization && req.headers.authorization.split(' ')[1]
});

module.exports = { authenticateToken };
