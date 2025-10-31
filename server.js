import express from 'express';
import cors from 'cors';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize services
const sql = neon(process.env.NEON_DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact form endpoint
app.post('/api/contact-form', async (req, res) => {
  try {
    const formData = req.body;
    console.log("Received form submission:", formData);

    if (!formData.name || !formData.email || !formData.eventType) {
      return res.status(400).json({ 
        error: "Missing required fields: name, email, eventType" 
      });
    }

    // 1️⃣ Store in Neon database
    const insertQuery = `
      INSERT INTO contact_submissions (
        name, email, phone, event_type, event_date, 
        guest_count, plan, message
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, created_at
    `;

    const values = [
      formData.name,
      formData.email,
      formData.phone || null,
      formData.eventType,
      formData.eventDate ? new Date(formData.eventDate).toISOString().split("T")[0] : null,
      formData.guestCount || null,
      formData.plan || null,
      formData.message || null,
    ];

    const result = await sql(insertQuery, values);
    const submissionData = result[0];

    if (!submissionData) {
      throw new Error("Failed to save form data");
    }

    console.log("Form data saved to database:", submissionData);

    // 2️⃣ Send email to YOU (Aryan)
    const emailHtml = `
      <h1>🎩 New Magic Show Inquiry!</h1>
      <h2>Contact Info:</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ""}

      <h2>Event Details:</h2>
      <p><strong>Type:</strong> ${formData.eventType}</p>
      ${formData.eventDate ? `<p><strong>Date:</strong> ${formData.eventDate}</p>` : ""}
      ${formData.guestCount ? `<p><strong>Guests:</strong> ${formData.guestCount}</p>` : ""}
      ${formData.plan ? `<p><strong>Plan:</strong> ${formData.plan}</p>` : ""}

      ${formData.message ? `<h2>Message:</h2><p>${formData.message}</p>` : ""}
      <hr />
      <p><em>Submitted via your magic show website.</em></p>
    `;

    try {
      await resend.emails.send({
        from: "Magic Show Inquiry <onboarding@resend.dev>",
        to: ["aryanlalamagic@gmail.com"],
        subject: `🎪 New Magic Show Inquiry from ${formData.name}`,
        html: emailHtml,
        replyTo: formData.email,
      });
    } catch (notifyError) {
      console.error("Error sending admin email:", notifyError);
    }

    // 3️⃣ Auto-reply to the user
    const userReplyHtml = `
      <p>Hi ${formData.name},</p>
      <p>Thank you for your inquiry about my magic show! ✨</p>
      <p>I'll personally get back to you within 24 hours to discuss your event details.</p>
      <p>Best regards,<br/>Aryan Lala<br/>🎩 Magician & Entertainer</p>
    `;

    try {
      await resend.emails.send({
        from: "Aryan Lala Magic <onboarding@resend.dev>",
        to: [formData.email],
        subject: "✨ Thanks for your inquiry!",
        html: userReplyHtml,
      });
    } catch (autoReplyError) {
      console.error("Error sending auto-reply:", autoReplyError);
    }

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      submissionId: submissionData.id,
    });

  } catch (error) {
    console.error("Error in contact-form endpoint:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
