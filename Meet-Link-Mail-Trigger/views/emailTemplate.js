module.exports = function interviewEmailTemplate(candidateName, date, time, platform, meetingLink, interviewerName, interviewerTitle, companyName) {
    return `
    Dear ${candidateName},

    We are pleased to inform you that your interview with ${companyName} has been successfully scheduled. Below are the details of your interview:

    Interview Details:
    Date: ${date}
    Time: ${time} (Please ensure you join the interview 10 minutes prior to the scheduled time)
    Interview Mode: Video Call
    Location/Platform: ${platform}
    Meeting Link: ${meetingLink}

    Interview Panel:
    ${interviewerName} - ${interviewerTitle}

    What to Prepare:
    Please make sure to have the following ready:
    - A copy of your updated resume.
    - Any work samples or portfolio that might support your application.
    - A quiet space with a stable internet connection.

    Contact Information:
    If you have any questions or need to reschedule, please contact us.

    We look forward to speaking with you and learning more about how your skills and experience align with the opportunities at ${companyName}.

    Thank you for your interest in joining our team.

    Best regards,
    The ${companyName} Team
    `;
};
