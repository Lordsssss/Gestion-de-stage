const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
        const transporter = nodemailer.createTransport({
            service: "outlook",
            port: 465,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};