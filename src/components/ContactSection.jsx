import { cn } from "@/lib/utils";
import { useToast } from "./hooks/use-toast";
import emailjs from "emailjs-com";
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { canSendEmail, updateEmailTimestamp } from "@/lib/rateLimiter";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const service = import.meta.env.VITE_SERVICE_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID;
  const publickey = import.meta.env.VITE_PUBLIC_KEY;

  const handelSubmit = (event) => {
    event.preventDefault();
    //honey pot detector
    const honeypotValue = event.target.honeypot.value;
    if (honeypotValue) return; // bot detectado, a tomar por ····
    // rete limiter, Comprueba si ha pasado suficiente tiempo
    if (!canSendEmail()) {
      toast({
        title: "Wait a bit",
        description: "Please wait before sending again.",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(service, template, event.target, publickey)
      .then(() => {
        setFormData({ name: "", email: "", message: "" }); // 3. Limpiamos el formulario
        updateEmailTimestamp(); // Guarda en localStorage la fecha y hora del último envío exitoso
      })
      .catch(() => {
        alert("Ooops! Something went wrong");
      });

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for your message! I will reply ASAP",
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-24 px4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to contact me what ever you need! I am open to work or
          discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Connect with me!
            </h3>
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
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
                  <h4 className="font-medium">Phone number</h4>
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
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Jaén, Spain</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="pt-8">
                <h4 className="font-medium mb-4">Contact me</h4>
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
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
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
                  Your Name
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
                  Your Email
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
                  Your Message
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
                {isSubmitting ? "Sending..." : "Send"}
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
