import React from "react";

import { BackgroundContainer, InfoContainer, Button } from "./BackgroundItems";
import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";
const HeroItems = () => {
  return (
    <BackgroundContainer>
      <HeroImage />
      <HeroInfo />
    </BackgroundContainer>
  );
};

export default HeroItems;
