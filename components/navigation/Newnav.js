import React from "react";
import { MobileIcon } from "./NavbarItems";
import { FaBars } from "react-icons/fa";

const Newnav = ({ toggle }) => {
  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        position: "absolute",
        zIndex: "998",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h3 style={{ color: "white", paddingLeft: "25px" }}>DullyDesigns</h3>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <div style={{}} className="navbar-items">
        <h3 style={{ paddingLeft: "25px" }}>HOME</h3>
        <h3 style={{ paddingLeft: "25px" }}>ABOUT</h3>
        <h3 style={{ paddingLeft: "25px" }}>PROJECTS</h3>
      </div>
    </div>
  );
};

export default Newnav;
