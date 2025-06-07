import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { NavBar } from "@/components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { ProjectsSection } from "../components/ProjectsSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle/>        
        {/*Bg effects*/}
        <StarBackground />
        {/*Nav bar*/}
        <NavBar />
        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
        </main>
        {/*Footer*/}
    </div>
}