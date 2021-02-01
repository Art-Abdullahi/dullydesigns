import styled from "styled-components";

import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: red;
`;

export const Icon = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Logo = styled.h3`
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: "ff0000";
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: black;
`;

export const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-family: cooper-black-std, serif;
  font-weight: 400;
  color: #ff0000;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: red;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #ffffff;
  }
`;
