import React from "react";
import styled from "styled-components";

import { Navbar, Container } from "react-bootstrap";

const TextBox = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #777;
`;

interface Props {
  isBorder: boolean;
}

const Footer = ({ isBorder }: Props) => {
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

Footer.defaultProps = {
  isBorder: true,
};

export default Footer;
