const emailService = require('../services/emailService');
const interviewEmailTemplate = require('../views/emailTemplate');

exports.bookInterview = async (req, res) => {
    const { candidateName, email, date, time, platform, meetingLink, interviewerName, interviewerTitle, companyName } = req.body;

    const emailContent = interviewEmailTemplate(candidateName, date, time, platform, meetingLink, interviewerName, interviewerTitle, companyName);

    try {
        await emailService.sendInterviewEmail(email, `Interview Confirmation - ${companyName}`, emailContent);
        res.status(200).json({ message: 'Interview successfully booked and email sent.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
};
