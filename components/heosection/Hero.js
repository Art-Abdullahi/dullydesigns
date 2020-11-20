import React from "react";
import TestParticle from "../TestParticle";

import {
  BackgroundContainer,
  InfoContainer,
  ImageContainer,
  Img,
  Button,
} from "./BackgroundItems";
const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <TestParticle />
      <BackgroundContainer>
        <ImageContainer>
          <Img src="/hero2.svg" />
        </ImageContainer>
        <InfoContainer>
          <h1>
            Hello my name is abdullahi and i help startups build impactful
            websites.
          </h1>
          <Button>Let's Chat</Button>
        </InfoContainer>
      </BackgroundContainer>
    </div>
  );
};

export default Hero;