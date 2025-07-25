import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "../lib/langToggle";
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t } = useTranslation();
  const navItems = [
  { name: t("navbar.home"), href: "#hero" },
  { name: t("navbar.about"), href: "#about" },
  { name: t("navbar.skills"), href: "#skills" },
  { name: t("navbar.projects"), href: "#projects" },
  { name: t("navbar.contact"), href: "#contact" },
];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // bloqueo de scroll al abrir menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 pr-6 bg-background/1 backdrop-blur-md shadow-xs"
          : "py-8 pr-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 opacity-0 animate-fade-in-delay-2">
            <span className="text-glow text-foreground opacity-0 animate-fade-in-delay-2">
              RoDev
            </span>
            Portfolio
          </span>
        </a>

        {/* desktop nav menu*/}
        <div className="hidden md:flex space-x-7 ">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 opacity-0 animate-fade-in-delay-3"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile nav menu */}
        {/* (prev) => !prev) alternamos el valor dependiendo del prev*/}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 opacity-0 animate-fade-in-delay-3"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <LangToggle className=""/>
        <ThemeToggle />

        <div
          className={cn(
            "absolute top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
