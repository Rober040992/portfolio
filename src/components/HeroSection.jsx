import { ArrowBigDownDash } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';


export const HeroSection = () => {
  const { t } = useTranslation();
  const phrases = t("heroSection.phrases", { returnObjects: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> {t('heroSection.hi')} </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3">
              Roberto
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-5">
              Gómez
            </span>
          </h1>
          <p
            key={index}
            className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-out"
          >
            {phrases[index]}
          </p>
          <div className="pt-5 opacity-0 animate-fade-in-delay-7">
            <a href="#projects" className="cosmic-button">
              {t("heroSection.checkMyWork")}{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-4s ">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-muted-foreground ">{t('heroSection.scroll')}</span>
          <ArrowBigDownDash className="h-5 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
};
