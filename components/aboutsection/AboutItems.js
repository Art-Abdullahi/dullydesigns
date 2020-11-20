import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AboutHeading = styled.h1`
  text-align: left;
  font-size: 5rem;
  color: #5ce1e6;
  width: 50%;
  font-family: cooper-black-std, serif;
  font-weight: 400;
  font-style: normal;
  border-bottom: 5px solid #5ce1e6;
  margin-left: 3rem;
  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const AboutInfoContainer = styled.div`
  height: 60vh;
  width: 100%;

  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const AboutInfo = styled.div`
  width: 50%;
  height: auto;
  padding: 25px 25px 0 25px;
  font-size: 2rem;
  color: #5ce1e6;
  width: 50%;
  font-family: cooper-black-std, serif;
  font-weight: 300;
  font-style: normal;
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    font-size: 1rem;
  }
`;

export const AboutImage = styled.img`
  width: auto;
  height: auto;

  color: #5ce1e6;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50%;
  }
`;
