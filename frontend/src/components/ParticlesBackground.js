import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100, // Increase the particle count
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: { value: "#ff0000" }, // Bright red for testing visibility
          opacity: {
            value: 0.8, // Fully visible particles
          },
          size: {
            value: 5, // Larger particles
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
