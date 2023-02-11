import React from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const MainContainer = styled.section`
  display: flex;
  padding: 20px 0;
`;

const CenterAlign = styled.div`
  margin: auto;
  text-align: center;
`;

interface TextType {
  fontSize: string;
  fontWeight: string;
}
const TextData = styled.p<TextType>`
  margin-bottom: 10px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: #333;
`;

const StartButton = styled(Button).attrs((props) => ({
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
    <MainContainer className="MainSection">
      <CenterAlign>
        <TextData fontSize="45px" fontWeight="bold">
          Publish your stroy, your way
        </TextData>
        <TextData fontSize="30px" fontWeight="normal">
          Create a unique and beautiful blog.
        </TextData>
        <StartButton onClick={onClick}>Start</StartButton>
      </CenterAlign>
    </MainContainer>
  );
};

export default MainSection;
