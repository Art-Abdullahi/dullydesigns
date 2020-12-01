import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const ProjectHeading = styled.h1`
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
export const ProjectGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;
