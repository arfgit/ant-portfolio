import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticleBackground = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#00040d",
      },
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#001B5A",
        },
        links: {
          color: {
            value: "#001B5A",
          },
          enable: true,
          opacity: 0.9,
          distance: 200,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      id={props.id}
      init={particlesInit}
      options={options}
      height="100vh"
      className="w-[100%]"
    />
  );
};

export default ParticleBackground;
