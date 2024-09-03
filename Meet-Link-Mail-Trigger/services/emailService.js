const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({

    host: config.email.host,
    port: config.email.port,
    service: "Gmail",
    secure: false, // true for 465, false for other ports
    auth: {
        type: "login",
        user: config.email.auth.user,
        pass: config.email.auth.pass
    }
});

exports.sendInterviewEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
        
            from: `"${config.email.user}" <${config.email.user}>`,
            to,
            subject,
            text
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
