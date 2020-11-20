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
import { FaBars } from "react-icons/fa";

import Link from "next/link";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link href="/">DullyDesigns</Link>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                <Link href="/">Home</Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <Link href="/about">About</Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <Link href="/projects">Projects</Link>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
