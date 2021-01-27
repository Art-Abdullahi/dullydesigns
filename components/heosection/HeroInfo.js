import React from "react";
import { InfoContainer, Button } from "./BackgroundItems";
const HeroInfo = () => {
  return (
    <InfoContainer style={{ border: "5px solid green" }}>
      <h1>
        <span
          style={{ color: "white", paddingLeft: "20rem", paddingBottom: "0" }}
        >
          ABDULLAHI
        </span>
        &nbsp; HASSAN
      </h1>
      <p>
        <span style={{ color: "white", paddingLeft: "20rem" }}>
          GRAPHIC-DESIGNER
        </span>
        &nbsp;&nbsp;
        <span style={{ color: "red" }}>FULLSTACK DEV</span>
      </p>
      <Button>Let's Chat</Button>
    </InfoContainer>
  );
};

export default HeroInfo;
