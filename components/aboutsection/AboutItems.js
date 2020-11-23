import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;
export const AboutHeading = styled.h1`
  text-align: left;
  font-size: 5rem;

  width: 100%;
  font-family: cooper-black-std, serif;
  font-weight: 400;
  font-style: normal;
  margin-top: 2rem;
  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const AboutInfoContainer = styled.div`
  height: 60vh;
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const AboutInfo = styled.div`
  width: 50%;
  height: auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  width: 50%;
  height: 100%;
  padding: 25px 25px 0 25px;
  @media screen and (max-width: 480px) {
    width: 80%;
    height: 70%;
  }
`;
