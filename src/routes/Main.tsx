import React from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";
import styled from "styled-components";

import { FooterAlign } from "../styles/PageView";
import MainHeader from "../components/Main/MainHeader";
import HomeFooter from "../components/Share/Footer";
import MainSection from "../components/Main/MainSection";
import image from "../assets/images/Background.jpg";

const MainContainer = styled(FooterAlign)`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Main = () => {
  const userData = useRecoilValue(loginData);
  return (
    <MainContainer className="Main">
      <MainHeader />
      <MainSection isLoggedIn={userData.isLoggedIn} uid={userData.nickname ?? ""} />
      <HomeFooter />
    </MainContainer>
  );
};

export default Main;
