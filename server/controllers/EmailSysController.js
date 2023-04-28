const HttpError = require("../models/HttpErreur");
require("dotenv").config();
const multer = require("multer");
const nodemailer = require("nodemailer");

const upload = multer({ storage: multer.memoryStorage() });

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (req, res) => {
    console.log(req.body)
  const { email,emailuser, subject, message } = req.body;

  const files = req.files || [];

  const attachments = files.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
  }));
  const fullSubject = "STAGE MONTMORENCY:" + subject;
  const fullMessage = "Email de l'étudiant :"+ emailuser + "\n\n" + message;
  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: fullSubject,
    text: fullMessage,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error sending email");
  }
};

exports.sendEmail = sendEmail;
exports.upload = upload;