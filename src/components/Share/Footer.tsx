import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const TextBox = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #777;
`;

const Footer = () => {
  return (
    <footer className="HomeFooter">
      <Navbar bg="light">
        <Container>
          <TextBox> 2023 My own blog project</TextBox>
          <TextBox> © Snowcat</TextBox>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
