import { useEffect, useState } from "react";

export const DayBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    generateClouds();
    window.addEventListener("resize", generateClouds);
    return () => window.removeEventListener("resize", generateClouds);
  }, []);

  const generateClouds = () => {
    const numberOfClouds = Math.floor(window.innerWidth / 300);
    const newClouds = Array.from({ length: numberOfClouds }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 80,
      x: Math.random() * 90,
      y: Math.random() * 50,
      duration: Math.random() * 50 + 10,
    }));
    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* animacion de barra del scroll superior*/}
      <div className="scroll-watcher"></div>
      {/* Sol */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full shadow-xl animate-float blur-xs" />

      {/* Nubes */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-cloud"
          style={{
            left: cloud.x + "%",
            top: cloud.y + "%",
            animationDuration: cloud.duration + "s",
          }}
        >
          <div className="absolute w-16 h-10 bg-white/90 rounded-full blur-md left-0 top-2" />
          <div className="absolute w-20 h-12 bg-white/90 rounded-full blur-md left-6 top-0" />
          <div className="absolute w-16 h-10 bg-white/90 rounded-full blur-md left-12 top-2" />
        </div>
      ))}
    </div>
  );
};
