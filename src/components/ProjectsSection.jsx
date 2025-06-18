import { ArrowBigRight, ExternalLink, Github, GithubIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    key: "bananaPeels",
    image: "/projects/bananaPeels.png",
    tags: ["Node", "Express", "React", "TailwindCSS", "MongoDB", "AWS"],
    demoUrl: "https://bananapeels.duckdns.org/",
    githubUrl: "https://github.com/orgs/PruebasBananaPeelsTeam/repositories",
  },
  {
    id: 2,
    key: "calculator",
    image: "/projects/calculator.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Rober040992/MyOwn-JS-Calculator",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projectSection.whiteTitle")}
          <span className="text-primary">
            {" "}
            {t("projectSection.purpleTitle")}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-7 max-w-3xl mx-auto">
          {t("projectSection.intro")}
        </p>
        <div className="text-primary font-bold text-2xl mb-7">
          {t("projectSection.have")}
        </div>

        {/* projects cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectKey = project.key ?? null;

            return (
              <div
                key={index}
                className="group bg-card/80 rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={
                      projectKey
                        ? t(`projectSection.projects.${projectKey}.title`)
                        : project.title
                    }
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary">
                  {projectKey
                    ? t(`projectSection.projects.${projectKey}.title`)
                    : project.title}
                </h3>
                <p className="text-muted-foreground text-sm m-4">
                  {projectKey
                    ? t(`projectSection.projects.${projectKey}.description`)
                    : project.description}
                </p>

                <div className="flex justify-start mt-auto">
                  <div className="flex space-x-3 p-2 ml-2 mb-1">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/60 hover:text-primary transition-colors duration-300 hover:scale-105"
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
            );
          })}
        </div>

        {/* check my github */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Rober040992"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            <ArrowBigRight size={25} />
            {t("projectSection.chekGit")}
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
