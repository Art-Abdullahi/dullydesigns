import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 0;

  display: flex;

  background: transparent;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;
export const InfoContainer = styled.div`
  text-align: center;
  height: auto;
  width: 100%;
  color: #5ce1e6;

  display: flex;
  flex-direction: column;

  align-items: center;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;
export const ImageContainer = styled.div`
  height: auto;
  width: 100%;

  text-align: center;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  background: #ff0000;
  border-radius: 3px;
  border: 2px solid #ff0000;
  color: white;
  font-size: 2rem;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-align: left;
  font-family: cooper-black-std, serif;
  font-weight: 300;
  font-style: normal;
  width: 250px;
  transition: 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: #5ce1e6;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 1.3rem;
  }
`;
