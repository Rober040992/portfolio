import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          {t("about.about")}{" "}
          <span className="text-primary">{t("about.me")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl"> {t("about.title")}</h3>
            <p className="text-muted-foreground">{t("about.1paragraph")}</p>
            <p className="text-muted-foreground">{t("about.2paragraph")}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("about.touch")}
              </a>
              <a
                href="/CV_Roberto_es.pdf"
                className="ghost-button"
                download="CV_Roberto_es.pdf"
              >
                {t("about.download")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover opacity-90">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary">
                    {t("services.webDevTitle")}
                  </h4>
                  <p>{t("services.webDevDesc")} </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover opacity-90">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary">
                    {t("services.uiuxTitle")}
                  </h4>
                  <p>{t("services.uiuxDesc")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover opacity-90">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary">
                    {t("services.teamTitle")}{" "}
                  </h4>
                  <p>{t("services.teamDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
