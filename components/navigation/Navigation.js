import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Navigation = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} toggleTheme={toggleTheme} />
    </>
  );
};

export default Navigation;
