// const nodemailer = require('nodemailer');

// export default async function handler(req, res) {
// if (req.method === 'POST') {
// const { name, email, message } = req.body;

// const transporter = nodemailer.createTransport({
// host: 'smtp.gmail.com', // Ersetzen Sie dies durch Ihren SMTP-Host
// port: 587,
// auth: {
// user: 'martinschmit369@gmail.com', // Ersetzen Sie dies durch Ihren SMTP-Benutzernamen
// pass: 'piwm xvhu hxvq hqck', // Ersetzen Sie dies durch Ihr SMTP-Passwort
// },
// });

// const mailOptions = {
// from: 'martinschmit369@gmail.com', // Ihre E-Mail-Adresse
// to: 'bronco994@web.de', // Ziel-E-Mail-Adresse
// subject: 'New Contact Form Submission',
// text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
// };

// try {
// await transporter.sendMail(mailOptions);
// res.status(200).json({ message: 'Email sent successfully' });
// } catch (error) {
// res.status(500).json({ error: 'Failed to send email' });
// }
// } else {
// res.status(405).json({ error: 'Method not allowed' });
// }
// }

// sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Erstelle einen Transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Ersetzen Sie dies durch Ihren SMTP-Host
            port: 587,
            secure: false, // true für 465, false für andere Ports
            auth: {
                user: 'martinschmit369@gmail.com', // Ersetzen Sie dies durch Ihren SMTP-Benutzernamen
                pass: 'piwm xvhu hxvq hqck', // Ersetzen Sie dies durch Ihr SMTP-Passwort
            },
        });

        const mailOptions = {
            from: 'martinschmit369@gmail.com', // Ihre E-Mail-Adresse
            to: 'bronco994@web.de', // Ziel-E-Mail-Adresse
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error); // Protokolliere den Fehler für Debugging-Zwecke
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}