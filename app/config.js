const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB_DEV,
    jwtSecret: process.env.SECRET_KEY,
    jwtExpiration: process.env.JWT_EXPIRATION, // 24 Hours
    gmail: process.env.GMAIL,
    password: process.env.PASSWORD, // Password device
}