// /api/sendEmail.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ipTracker = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const { name, email, message, honeypotValue } = req.body;

  // Honeypot check
  if (honeypotValue) {
    return res.status(400).json({ error: "Bot detected" });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Rate limit por IP
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const now = Date.now();
  const lastTime = ipTracker.get(ip);

  if (lastTime && now - lastTime < 90000) {
    return res
      .status(429)
      .json({ error: "Too many requests. Wait 90 seconds." });
  }

  ipTracker.set(ip, now);

  try {
    const data = await resend.emails.send({
      from: "Roberto <onboarding@resend.dev>",
      to: "rgfrasta@gmail.com",
      subject: "Nuevo mensaje desde tu portfolio",
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
