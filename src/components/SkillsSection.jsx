import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "JavaScript (ES6+)", level: 65, category: "Fullstack" },
  { name: "Node.js", level: 55, category: "Backend" },
  { name: "React", level: 50, category: "Frontend" },
  { name: "MongoDB", level: 60, category: "Backend" },
  { name: "SQL", level: 20, category: "Backend" },
  { name: "HTML/CSS", level: 80, category: "Frontend" },
  { name: "Express.js", level: 40, category: "Backend" },
  { name: "Tailwind CSS", level: 70, category: "Frontend" },
  { name: "Mongoose", level: 50, category: "Backend" },
  { name: "Zod", level: 50, category: "Backend" },
  { name: "Axios", level: 60, category: "Frontend" },
  { name: "Socket.io / WebSockets", level: 25, category: "Fullstack" },
  { name: "Git y GitHub", level: 75, category: "Tools" },
  { name: "AWS EC2", level: 40, category: "DevOps" },
  { name: "Bash", level: 30, category: "DevOps" },
  { name: "TypeScript", level: 15, category: "Frontend" },
  { name: "VS Code", level: 80, category: "Tools" },
];

const categories = [
  "All",
  "Fullstack",
  "Backend",
  "Frontend",
  "Tools",
  "DevOps",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer hover:text-primary duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card/10 backdrop-blur-md p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <div className="text-right">
                  <span className="text-sm">{skill.level + " %"}</span>
                </div>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
