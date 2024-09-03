const dotenv = require("dotenv")
dotenv.config()
module.exports = {
    email: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ,
        secure: false, // Use SSL, false for TLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }
};
