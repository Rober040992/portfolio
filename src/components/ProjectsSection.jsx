import { ArrowBigRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BananaPeels, buy or sell your furniture.",
    description:
      "BananaPeels is a second-hand marketplace web platform where users can securely post, browse, and manage ads quickly and easily.",
    image: "/projects/bananaPeels.png",
    tags: ["Node", "Express", "React", "TailwindCSS", "MongoDB", "AWS"],
    demoUrl: "https://bananapeels.duckdns.org/",
    githubUrl: "https://github.com/orgs/PruebasBananaPeelsTeam/repositories",
  },
  {
    id: 2,
    title: "calculator is a bla bla blaa bla bla ",
    description:
      "BananaPeels is a second-hand marketplace web platform where users can securely post, browse, and manage ads quickly and easily.",
    image: "/projects/calculator.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "example qwerty qwerty qwerty qwerty",
    description:
      "BananaPeels is a second-hand marketplace web platform where users can securely post, browse, and manage ads quickly and easily.",

    image: "/projects/example.png",
    tags: ["example"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse into the work. I'm most proud of creative solutions,
          real-world challenges, and clean code.
          <span className="text-primary font-bold">
            Have a look the projects below
          </span>
        </p>
        {/*projects cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/80 rounded-lg overflow-hidden shadow-xs card-hover flex flex-col "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
              </div>
              {/*tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/*projects title and description*/}
              <h3 className="text-xl font-semibold mb-1 text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm m-4">
                {project.description}
              </p>
              {/*ghub links */}
              <div className="flex justify-start mt-auto">
                <div className="flex space-x-3 p-2 ml-2 mb-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/60 hover:text-primary transition-colors duration-300  hover:scale-105"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/60 hover:text-primary transition-colors duration-500 hover:scale-105"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* check my github */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Rober040992"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            <ArrowBigRight size={25} />
            Check my GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
