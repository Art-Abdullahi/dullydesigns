import React, { useEffect } from "react";
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
          <p
            style={{ color: "#ff0000", fontSize: "1.5rem", lineHeight: "25px" }}
          >
            Growing up there was a cyber cafe just around the house we lived in,
            where i would spend hours on the computer and explore it's
            posibilities. Fast foward after finishing highschool i got
            introduced to Web development by a good friend. I recently took part
            in Facebook developer circle's buildforsdg program which enhanced my
            competence and market readiness as a developer. Since then i have
            worked on numerous projects of some which are showcased below.
          </p>
        </AboutInfo>
        <AboutImage src="/red.svg" width="50%" height="100%"></AboutImage>
      </AboutInfoContainer>
    </AboutContainer>
  );
};

export default About;
