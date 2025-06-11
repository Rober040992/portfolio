import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LangToggle = () => {
  const { i18n } = useTranslation();

  const isSpanish = i18n.language.startsWith("es");

  const toggleLanguage = () => {
    i18n.changeLanguage(isSpanish ? "en" : "es");
  };

  return (
    <div className="flex gap-1 opacity-0 animate-fade-in-delay-4">
      <Languages size={16} className="opacity-70" />
      <button
        onClick={toggleLanguage}
        className="text-foreground/80 hover:text-primary hover:scale-105 transition-colors duration-300 cursor-pointer"
      >
        {isSpanish ? "En" : "Es"}
      </button>
    </div>
  );
};
