import React from "react";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 50%;
  z-index: 1;
`;

const Animation = styled(Spinner)`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 96px;
  height: 96px;
  margin-top: -48px;
  margin-left: -48px;
`;

const Loading = () => {
  return (
    <Container>
      <Animation animation="border" />
    </Container>
  );
};

export default Loading;
