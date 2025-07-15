import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const options = useMemo(
    () => ({
      background: {
        color: {
            value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          resize: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: ["bubble", "connect"],
          },
        },
        modes: {
          bubble: {
            distance: 150,
            size: 6,
            duration: 2,
            opacity: 0.5,
            speed: 3
          },
          connect: {
            distance: 70,
            links: {
              opacity: 0.03
            },
            radius: 100
          },
        },
      },
      particles: {
        color: {
            value: "#FFFF",
        },
        links: {
            color: "#FFFF",
            distance: 100,
            enable: true,
            opacity: 0.02,
            width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          random: true,
          speed: {
            min: 0,
            max: 1.5
          },
          straight: true,
        },
        number: {
          density: {
            value: 1,
            enable: true,
            area: 300,
          },
          value: 500,
        },
        opacity: {
          value: 0.05,
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
    }),
    [],
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
