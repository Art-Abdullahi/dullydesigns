import React from "react";
import TestParticle from "../TestParticle";
import HeroItems from "./HeroItems";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <TestParticle />
      <HeroItems />
    </div>
  );
};

export default Hero;
