import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarItems";
import Link from "next/link";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
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
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
