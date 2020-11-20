import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;
