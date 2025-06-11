import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LangToggle = (props) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex gap-1 opacity-0 animate-fade-in-delay-4 ${props.className}`}>
      <Languages size={16} className="opacity-70"/>
      <button
        onClick={() => changeLanguage("en")}
        className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
      >
        En
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
      >
        Es
      </button>
    </div>
  );
};
