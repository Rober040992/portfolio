import { ThemeToggle } from "@/components/ThemeToggle";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { DayBackground } from "../components/DayBackground";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme toggle*/}
      <ThemeToggle />
      {/*Bg effects*/}
      {isDark ? <StarBackground /> : <DayBackground />}
      {/*Nav bar*/}
      <NavBar />
      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        {/*<ExperienceSection /> */}
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
};
