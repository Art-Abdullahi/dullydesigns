import React from "react";
import { BackgroundContainer } from "./heosection/BackgroundItems";
import Particles from "react-particles-js";

const TestParticle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#5ce1e6",
            opacity: 0.4,
            width: 1,
          },
        },

        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        width: "100%",
        position: "absolute",

        background: "transparent",
        zIndex: "-999",
      }}
    />
  );
};

export default TestParticle;
