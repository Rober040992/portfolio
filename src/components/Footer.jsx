import { ArrowUpCircleIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-10 bg-card/50 relative border-t border-border mt-10 pt-4 flex flex-wrap justify-between items-center">
      <p className="text-sm ">
        &copy; {new Date().getFullYear()} Portfolio design inspired by{" "}
        <a
          href="https://www.youtube.com/@PedroTechnologies"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          PedroTech
        </a>
        . Customized and developed by Roberto Gómez.
      </p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/40 text-primary transition-colors">
        <ArrowUpCircleIcon/> Top
      </a>
    </footer>
  );
};
