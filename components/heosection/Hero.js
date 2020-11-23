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
          <Img src="/hero2.svg" height="400px" width="100%" />
        </ImageContainer>
        <InfoContainer>
          <h1>FULL-STACK DEVELOPER</h1>
          <p>
            Hello my name is abdullahi and i am a full-stack developer based in
            Nairobi,Kenya.
          </p>
          <Button>Let's Chat</Button>
        </InfoContainer>
      </BackgroundContainer>
    </div>
  );
};

export default Hero;
