import React from "react";
import {
  SideBarContainer,
  Icon,
  Logo,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarItems";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import Link from "next/link";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <Logo>DullyDesigns</Logo>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle}>
            <Link href="/">Home</Link>
          </SideBarLink>
          <SideBarLink onClick={toggle}>
            <Link href="/about">About</Link>
          </SideBarLink>
          <SideBarLink onClick={toggle}>
            <Link href="/projects">Projects</Link>
          </SideBarLink>
          <SideBarLink onClick={toggle}>
            <div
              className="socials"
              style={{ color: "#ff0000", marginTop: "240px" }}
            >
              <FaLinkedin />
              <GrInstagram />
              <GrTwitter />
            </div>
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
