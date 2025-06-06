import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl">
              {" "}
              Passionate developer blablabla
            </h3>
            <p className="text-muted-foreground">
              habla de experiencia bla bla Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Optio velit officia perferendis
              inventore, adipisci molestias saepe maiores error possimus totam
              amet facilis quis autem dolore magni ipsa soluta fugiat quidem.
            </p>
            <p className="text-muted-foreground">
              apasionado en bla bla Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nesciunt, earum voluptate! Rem fugiat quam saepe
              sequi, ea accusamus perspiciatis et illo repellendus animi ad
              corrupti cum! Quibusdam cumque impedit voluptas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contac" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="./public/CV Roberto.pdf"
                className="ghost-button"
                download="CV Roberto.pdf"
              >
                Download my CV
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
                    Web Development
                  </h4>
                  <p>
                    Creating modern websites and web apps using modern tools
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover opacity-90">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary">UI/UX</h4>
                  <p>
                    Designing intuitive and inclusive user experiences focused
                    on usability and clarity
                  </p>
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
                    Team Collaboration
                  </h4>
                  <p>
                    Working in agile teams, applying Git and GitHub for
                    efficient collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
