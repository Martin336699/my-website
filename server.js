import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Lade Umgebungsvariablen

const app = express();
const router = express.Router();

const allowedOrigins = ['https://my-website-olive-nu.vercel.app/']; // Ersetzen Sie dies durch Ihre tatsächliche Vercel-Domain

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || "martinschmit369@gmail.com",
        pass: process.env.EMAIL_PASS || "piwm xvhu hxvq hqck", // Verwende hier dein App-Passwort
    },
    tls: {
        rejectUnauthorized: false // Diese Zeile hinzufügen
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log("Error verifying email transporter:", error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/api/sendEmail", (req, res) => { // Ensure the endpoint matches the client request
    console.log("Request Body:", req.body); // Logge den gesamten Anfragekörper

    const { firstName, lastName, email, message, phone } = req.body;

    console.log("Extracted Data:", { firstName, lastName, email, message, phone }); // Logge die extrahierten Felder

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ code: 400, status: "Bad Request", error: "Missing required fields" });
    }

    const name = `${firstName} ${lastName}`;

    const mail = {
        from: name,
        to: process.env.EMAIL_USER || "bronco994@web.de",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ code: 500, status: "Error sending message", error });
        } else {
            res.status(200).json({ code: 200, status: "Message Sent" });
        }
    });
});

app.listen(5000, () => console.log("Server Running on port 5000"));