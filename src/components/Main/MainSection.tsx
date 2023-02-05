import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainContainer = styled.section`
  display: flex;
  border-top: 1px solid #eee;
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

const StartButton = styled.button`
  width: 200px;
  margin: 0;
  margin-top: 20px;
  line-height: 60px;
  border-radius: 30px;
  background-color: #555;
  color: #fff;
  border: 1px solid #555;
  cursor: pointer;
  font-size: 20px;
`;

interface Props {
  isLoggedIn: boolean;
  uid: string | null;
}

const MainSection = ({ isLoggedIn, uid }: Props) => {
  const navigate = useNavigate();
  const onClick = () => {
    if (isLoggedIn === true) {
      navigate(`/home/${uid}`);
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
