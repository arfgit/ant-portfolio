import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particles-config";

const ParticleBackground = () => {
  //   return <Particles params={particleConfig}></Particles>;
  return (
    <Particles
      params={{
        particles: { number: { value: 50 }, size: { value: 3 } },
        interactivity: {
          events: { onhover: { enable: true, mode: "repulse" } },
        },
      }}
    ></Particles>
  );
};

export default ParticleBackground;
