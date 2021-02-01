import React from "react";
import {
  ContactContainer,
  ContactHeading,
  ContactWrapper,
  ContactList,
  ContactInfo,
  ContactForm,
  Full,
  Label,
} from "./ContactItems";
import { Button } from "../heosection/BackgroundItems";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading className="brand">Contact Me</ContactHeading>
      <ContactWrapper className="wrapper">
        <ContactInfo className="company-info">
          <h3 style={{ color: "white" }}>DullyDesigns</h3>
          <ContactList>
            <li>Nairobi, Kenya</li>
            <li>+254-791-064-660</li>
            <li>abdullahihassanke@gmail.com</li>
          </ContactList>
        </ContactInfo>
        <div className="contact">
          <h3>Email Me</h3>
          <ContactForm>
            <p>
              <Label>Name</Label>
              <input type="text" name="name" />
            </p>
            <p>
              <Label>Company</Label>
              <input type="text" name="company" />
            </p>
            <p>
              <Label>Email Adress</Label>
              <input type="text" name="email" />
            </p>
            <p>
              <Label>Phone Number</Label>
              <input type="text" name="phone" />
            </p>
            <Full>
              <Label>Message</Label>
              <textarea name="message" rows="5"></textarea>
            </Full>
            <Full>
              <Button>Submit</Button>
            </Full>
          </ContactForm>
        </div>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
