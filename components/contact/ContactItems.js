import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  border: "5px solid red";

  @media screen and (max-width: 480px) {
    width: 636px;
  }
`;

export const ContactHeading = styled.h1`
  text-align: center;
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

export const ContactWrapper = styled.div`
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactInfo = styled.div`
  background: red;
  padding: 1em 1em 1em 1em;
  color: white;
  text-align: center;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 100;
  font-style: normal;
  @media screen and (min-width: 700px) {
  }
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 1em 1em 1em 1em;
`;

export const Label = styled.label`
  display: block;
`;

export const Full = styled.p`
  grid-column: 1 / 3;
`;
