import React from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { Button } from "react-bootstrap";
import styled from "styled-components";

interface TextType {
  fontSize: string;
  fontWeight: string;
}

const MainContainer = styled.section`
  background: linear-gradient(#f8f9fa 0%, #fbfcdb 20%, #e9defa 80%, #f8f9fa 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextData = styled.p<TextType>`
  margin-bottom: 10px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: #333;
`;

const StartButton = styled(Button).attrs(() => ({
  variant: "primary",
  size: "lg",
}))`
  width: 200px;
  height: 60px;
  font-size: 24px;
  margin-top: 20px;
`;

const MainSection = () => {
  const userData = useRecoilValue(loginData);
  const navigate = useNavigate();
  const onClick = () => {
    if (userData.isLoggedIn === true) {
      navigate(`/home/${userData.nickname}`);
    } else {
      navigate("/auth");
    }
  };
  return (
    <MainContainer className="MainSection flex-grow-1">
      <TextData fontSize="45px" fontWeight="bold">
        Publish your stroy, your way
      </TextData>
      <TextData fontSize="30px" fontWeight="normal">
        Create a unique and beautiful blog.
      </TextData>
      <StartButton onClick={onClick}>Start</StartButton>
    </MainContainer>
  );
};

export default MainSection;
