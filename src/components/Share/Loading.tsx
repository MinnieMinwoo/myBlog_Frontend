import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 50%;
`;

const Spinner = styled.div`
  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 96px;
  height: 96px;
  margin-top: -48px;
  margin-left: -48px;
  border-radius: 50%;
  border: 12px solid transparent;
  border-top-color: #333;
  border-bottom-color: #333;
  animation: spinning 1.5s linear infinite;
`;

const Loading = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
};

export default Loading;
