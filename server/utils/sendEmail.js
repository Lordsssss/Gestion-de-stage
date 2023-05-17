const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
        const transporter = nodemailer.createTransport({
            service: "outlook",
            port: 465,
            auth: {
              user: EMAIL_USER,
              pass: EMAIL_PASS,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

		await transporter.sendMail({
			from: process.env.USER,
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