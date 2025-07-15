// /api/sendEmail.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ipTracker = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, message, honeypotValue, recaptchaToken } = req.body;

  // Validación de variables de entorno
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error("Falta RECAPTCHA_SECRET_KEY en el entorno");
    return res.status(500).json({ error: "Falta RECAPTCHA_SECRET_KEY en el entorno del backend" });
  }

  if (!recaptchaToken) {
    return res.status(400).json({ error: "Falta el token de reCAPTCHA" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Honeypot check
  if (honeypotValue) {
    return res.status(400).json({ error: "Bot detected" });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Verificación del token reCAPTCHA
  try {
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed", details: recaptchaData["error-codes"] });
    }
    if (typeof recaptchaData.score === "number" && recaptchaData.score < 0.5) {
      return res.status(400).json({ error: "reCAPTCHA score too low", score: recaptchaData.score });
    }
  } catch (err) {
    console.error("reCAPTCHA error:", err);
    return res.status(500).json({ error: "reCAPTCHA server error" });
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
