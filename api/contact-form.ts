import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate?: string;
  guestCount?: string;
  budget?: string;
  message?: string;
}

export default async function handler(req: any, res: any) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).json({}).end();
  }

  try {
    // Initialize Neon client
    const sql = neon(process.env.NEON_DATABASE_URL!);
    
    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const formData: ContactFormData = req.body;
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
        guest_count, budget, message
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
      formData.budget || null,
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
      ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ""}

      ${formData.message ? `<h2>Message:</h2><p>${formData.message}</p>` : ""}
      <hr />
      <p><em>Submitted via your magic show website.</em></p>
    `;

    try {
      await resend.emails.send({
        from: "Magic Show Inquiry <onboarding@resend.dev>", // use verified sender later
        to: ["aryanlalamagic@gmail.com"], // your email
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
    console.error("Error in contact-form function:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
