import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Lade Umgebungsvariablen

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
    },
    tls: {
        rejectUnauthorized: false // Diese Zeile hinzufügen
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/api/sendEmail", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
        from: name,
        to: process.env.EMAIL_USER2,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>Phone: ${phone}</p> <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ code: 500, status: "Error sending message", error });
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

app.listen(5000, () => console.log("Server Running on port 5000"));