import React from "react";
import styled from "styled-components";

import { Navbar, Container } from "react-bootstrap";
import image from "../../assets/images/logo.png";

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const MainHeader = () => {
  return (
    <header className="MainHeader">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <Logo src={image} alt="blog logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainHeader;
