import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  color: #5ce1e6;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 1.5rem;
    color: #5ce1e6;

    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  height: auto;
`;
export const NavLinks = styled.div`
  color: #5ce1e6;
  display: flex;

  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: cooper-black-std, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
  padding: 0 1rem;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid aqua;
  }
`;
