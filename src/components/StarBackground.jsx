import { useEffect, useState } from "react";

// Componente que genera un fondo animado con estrellas aleatorias y meteoros
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStar();
    generateMeteor();

    // ajusta la cantidad de stars segun el tamaño de la panalla
    const handleResize = () => {
        generateStar();
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  // genera estrellas random segun el tamaño de pantalla. contine id x y opacity duracion
  const generateStar = () => {
    // Calculamos el número de estrellas según el área de la ventana
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars); // actualizamos el estado
  };

  // genera meteoros, contiene id x y delay y animacion de duracion
  const generateMeteor = () => {
    const numberOfMeteors = 5

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 6 + 3,
      });
    }
    setMeteors(newMeteors); // actualizamos el estado
  };

  return (
    // Contenedor absoluto que cubre toda la pantalla
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* animacion de barra del scroll superior*/}
      <div className="scroll-watcher"></div>
      {/* Renderiza cada estrella como un div posicionado absolutamente */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Renderizamos meteoros */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 30 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.opacity,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
