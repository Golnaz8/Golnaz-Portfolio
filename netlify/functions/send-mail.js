import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER, 
      subject: "New Contact Form Golnaz's Portfolio", 
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, 
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email", error);
      res.status(500).json({ error: "Error submitting form" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
