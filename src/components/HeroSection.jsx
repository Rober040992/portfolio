import { ArrowBigDownDash } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const phrases = [
    "Forever learning, always building. This is where my journey as a developer begins.",
    "Building both sides of the web one backend route and one frontend component at a time.",
    "Learning to build the professional webs, to become better.",
    "Still a learner, but already solving problems from backend to frontend.",
    "Self-taught, still in progress but already building what I used to only imagine.",
    "Learning to think full stack, falling in love with Node, React and Deploy along the way.",
  ];

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
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
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
              Check my Work!
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-4s ">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-muted-foreground ">Scroll</span>
          <ArrowBigDownDash className="h-5 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
};
