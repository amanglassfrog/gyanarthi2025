import nodemailer from "nodemailer";

export const dynamic = 'force-dynamic'; // Optional but ensures dynamic rendering

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, dob, state, city, course, program } = body;

        if (!name || !email || !phone || !dob || !state || !city || !course || !program) {
            return Response.json({ message: "Missing required fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Gyanarthi Web Form" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: "New Form Submission from Gyanarthi Website",
            html: `
        <h3>New User Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Program:</strong> ${program}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Email send error:", error);
        return Response.json({ message: "Failed to send email." }, { status: 500 });
    }
}
