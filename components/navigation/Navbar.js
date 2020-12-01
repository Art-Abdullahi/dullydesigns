import React from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarItems";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

import Link from "next/link";
const Navbar = ({ toggle, toggleTheme }) => {
  return (
    <>
      <nav>
        <NavbarContainer>
          <NavLogo>DullyDesigns</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <div className="navLink">
                <Link href="/">Home</Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="navLink">
                <Link href="/about">About</Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="navLink">
                <Link href="/projects">Projects</Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="navLink">
                <FaMoon onClick={toggleTheme} />{" "}
              </div>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </nav>
    </>
  );
};

export default Navbar;
