import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

import blogIcon from "../../assets/images/logo.png";
import HeaderProfile from "./HeaderProfile";

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const HomeHeader = () => {
  const params = useParams();
  return (
    <header className="Header">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Logo src={blogIcon} alt="blog logo" />
            </Link>
            {`${params.userID ? `${params.userID}'s` : ""} Blog`}
            <Nav>
              <Nav.Link as={Link} to={`${params.userID ? `/home/${params.userID}` : "/"}`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={`${params.userID ? `/home/${params.userID}/category` : "/"}`}>
                Category
              </Nav.Link>
              <Nav.Link href="/">Tag</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
          </Navbar.Brand>
          <div>
            <HeaderProfile />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default HomeHeader;
