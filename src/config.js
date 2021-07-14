const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    OUTLOOK_MAIL: process.env.OUTLOOK_MAIL,
    OUTLOOK_PASSWORD: process.env.OUTLOOK_PASSWORD,
    PORT: process.env.PORT || 8000
};