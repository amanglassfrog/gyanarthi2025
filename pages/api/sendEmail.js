import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, course } = req.body;

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address (configured in .env)
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.RECEIVER_EMAIL, // The email address where you want to receive form data
      subject: "New eBook Request - Career Guidance",
      html: `
        <html>
          <body>
            <h2>New eBook Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Course:</strong> ${course}</p>
          </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      // Send response indicating success
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
