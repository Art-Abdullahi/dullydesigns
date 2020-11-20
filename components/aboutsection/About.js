import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutInfoContainer,
  AboutInfo,
  AboutImage,
} from "./AboutItems";
const About = () => {
  return (
    <AboutContainer>
      <AboutHeading>My Story</AboutHeading>
      <AboutInfoContainer>
        <AboutInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AboutInfo>
        <AboutImage src="/newpot.png"></AboutImage>
      </AboutInfoContainer>
    </AboutContainer>
  );
};

export default About;
