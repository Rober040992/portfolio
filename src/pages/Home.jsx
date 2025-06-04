import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle/>        
        {/*Bg effects*/}
        <StarBackground />
        {/*Nav bar*/}
        {/*Main Content*/}
        {/*Footer*/}
    </div>
}