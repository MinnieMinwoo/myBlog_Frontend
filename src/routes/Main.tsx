import React from "react";
import styled from "styled-components";

import { FooterAlign } from "../styles/PageView";
import MainHeader from "../components/Main/MainHeader";
import Footer from "../components/Share/Footer";
import MainSection from "../components/Main/MainSection";
import image from "../assets/images/Background.jpg";

const MainContainer = styled(FooterAlign)`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Main = () => {
  return (
    <MainContainer className="Main">
      <MainHeader />
      <MainSection />
      <Footer isBorder={false} />
    </MainContainer>
  );
};

export default Main;
