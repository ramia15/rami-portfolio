
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

const THE_RECAPTCHA_SECRET_KEY = 'RECAPTCHA_SECRET_KEY';

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        // Verify reCAPTCHA
        const recaptchaResponse = req.body['g-recaptcha-response'];
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
        
        const recaptchaVerification = await fetch(verificationURL, {
            method: 'POST',
        });
        const recaptchaResult = await recaptchaVerification.json();

        if (!recaptchaResult.success) {
            return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed.' });
        }

        // Configure nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'YOUR_EMAIL_ADDRESS',
                pass: 'YOUR_EMAIL_PASSWORD'
            }
        });

        // Extract form data
        const { name, email, message } = req.body;

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
                res.status(500).send({ success: false, error: error.message });
            } else {
                res.status(200).send({ success: true, info: info.response });
            }
        });
    } else {
        res.status(405).send({ error: 'Only POST requests are allowed' });
    }
};
