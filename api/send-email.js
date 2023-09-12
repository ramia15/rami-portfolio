const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Only POST requests are allowed' });
    }

    // Check for required fields
    const { name, email, message, 'g-recaptcha-response': recaptchaResponse } = req.body;
    if (!name || !email || !message || !recaptchaResponse) {
        console.error('Missing required fields.');
        return res.status(400).send({ success: false, message: 'Missing required fields.' });
    }

    try {
        // Verify reCAPTCHA
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
        const recaptchaVerification = await fetch(verificationURL, { method: 'POST' });
        const recaptchaResult = await recaptchaVerification.json();

        if (!recaptchaResult.success) {
            console.error('reCAPTCHA verification failed.');
            return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed.' });
        }

        // Configure nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.YOUR_EMAIL_ADDRESS,
                pass: process.env.YOUR_EMAIL_PASSWORD
            }
        });

        // Email options
        let mailOptions = {
            from: email,
            to: 'ramiabdel15@gmail.com',
            subject: 'New form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email sending error:', error.message);
                return res.status(500).send({ success: false, message: 'Failed to send email.' });
            }
            console.log('Email sent successfully:', info.response);
            res.status(200).send({ success: true, info: info.response });
        });

    } catch (error) {
        console.error('Unexpected error:', error.message);
        return res.status(500).send({ success: false, message: 'An unexpected error occurred.' });
    }
};
