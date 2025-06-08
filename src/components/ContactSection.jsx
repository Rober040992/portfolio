import { cn } from "@/lib/utils";

import {
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export const ContactSection = () => {

    const handelSubmit = (event) => {
        event.preventDefault()
        setTimeout(() => {
            
        },2000)
    }
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
          <div className="bg-card/80 p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6">
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
                  required
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
                  required
                  placeholder="Hi Roberto! I'd like to talk about ..."
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background",
                    "focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",

                )}
              >
                Send<Send size={15}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
