import React, { useEffect } from "react";
import { Button } from "./BackgroundItems";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram, GrTwitter } from "react-icons/gr";

const Split = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
          }}
        >
          <div className="first-box">
            <h1 style={{ color: "white", marginBottom: "0" }}>ABDULLAHI</h1>
            <h3 style={{ color: "white", marginTop: "0" }}>GRAPHIC DESIGNER</h3>
            <div className="socials">
              <FaLinkedin />
              <GrInstagram />
              <GrTwitter />
            </div>
          </div>
          <div className="second-box">
            <h1 style={{ color: "red", marginBottom: "0" }}>HASSAN</h1>
            <h3 style={{ marginTop: "0" }}>FULLSTACK DEVELOPER</h3>
            <div>
              <Button>Let's Chat</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
