import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, phone, email, message } = req.body;

        // Erstelle einen Transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Ersetzen Sie dies durch Ihren SMTP-Host
            port: 587,
            secure: false, // true für 465, false für andere Ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Ihre E-Mail-Adresse
            to: process.env.EMAIL_USER2, // Ziel-E-Mail-Adresse
            subject: 'New Contact Form Submission',
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
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