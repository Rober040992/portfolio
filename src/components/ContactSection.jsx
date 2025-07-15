import { cn } from "@/lib/utils";
import { useToast } from "./hooks/use-toast";
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { recaptchaReady } from "../main";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useTranslation();

  const handelSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    const form = event.target;
    const honeypotValue = form.honeypot.value;

    if (honeypotValue) {
      setIsSubmitting(false);
      return; // es bot
    }

    let token = "";

    try {
      // Espera a que el script esté listo
      await recaptchaReady;
      if (window.grecaptcha && window.grecaptcha.execute) {
        await new Promise((resolve) => {
          window.grecaptcha.ready(resolve);
        });
        token = await window.grecaptcha.execute(
          import.meta.env.VITE_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );
      } else {
        throw new Error("reCAPTCHA not loaded");
      }
    } catch (error) {
      toast({
        title: "reCAPTCHA error",
        description: error.message || "Failed to generate token.",
      });
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      honeypotValue: honeypotValue,
      recaptchaToken: token,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Si la API responde con JSON válido, se muestra el mensaje personalizado.
      // Si responde con texto o HTML inesperado (como el de Vercel o un fallo 500 feo), no crashea el frontend.
      if (!response.ok) {
        let errorMessage = "Unexpected error";

        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } else {
          const text = await response.text();
          errorMessage = text.slice(0, 100); // por si viene un HTML o texto plano largo
        }

        throw new Error(errorMessage);
      }

      setFormData({ name: "", email: "", message: "" });
      toast({
        title: t("contactSection.toastTitle"),
        description: t("contactSection.toastDescription"),
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contactSection.titleWhite")}{" "}
          <span className="text-primary">
            {t("contactSection.titlePrimary")}
          </span>{" "}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contactSection.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              {t("contactSection.connect")}
            </h3>
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contactSection.email")}</h4>
                  <a
                    href="mailto:rgfrasta@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rgfrasta@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contactSection.phone")}</h4>
                  <a
                    href="tel:+34 633621367"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 633621367
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">
                    {t("contactSection.location")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("contactSection.locationValue")}
                  </p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="pt-8">
                <h4 className="font-medium mb-4">
                  {t("contactSection.contactMe")}
                </h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/roberto-gomez-fabrega-5a694516a/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="https://github.com/Rober040992"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Contact Form */}
          <div
            className="bg-card/80 p-8 rounded-lg shadow-xs"
            onSubmit={handelSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {t("contactSection.sendMessage")}
            </h3>
            <form action="" className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />
              {/*name  */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-start font-medium mb-2 ml-3"
                >
                  {t("contactSection.yourName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Roberto ..."
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>
              {/*email  */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-start font-medium mb-2 ml-3"
                >
                  {t("contactSection.yourEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="rgfrasta@gmail.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>
              {/*Mensaje  */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-start font-medium mb-2 ml-3"
                >
                  {t("contactSection.yourMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Hi Roberto! I'd like to talk about ..."
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  )}
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                )}
              >
                {isSubmitting
                  ? t("contactSection.sending")
                  : t("contactSection.send")}
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
