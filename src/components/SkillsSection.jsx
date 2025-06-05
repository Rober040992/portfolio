
const skills = [
  { name: "JavaScript (ES6+)", level: 75, category: "Fullstack" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "HTML/CSS", level: 80, category: "Frontend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "Tailwind CSS", level: 60, category: "Frontend" },
  { name: "Mongoose", level: 65, category: "Backend" },
  { name: "Zod", level: 50, category: "Backend" },
  { name: "Axios", level: 60, category: "Frontend" },
  { name: "Socket.io / WebSockets", level: 20, category: "Fullstack" },
  { name: "Git y GitHub", level: 60, category: "Tools" },
  { name: "AWS EC2", level: 30, category: "DevOps" },
  { name: "TypeScript", level: 30, category: "Frontend" },
  { name: "VS Code", level: 60, category: "Tools" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

