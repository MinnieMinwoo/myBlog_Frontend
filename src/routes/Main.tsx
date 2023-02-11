import React from "react";
import styled from "styled-components";

import { FooterAlign } from "../styles/PageView";
import MainHeader from "../components/Main/MainHeader";
import Footer from "../components/Share/Footer";
import MainSection from "../components/Main/MainSection";

const MainContainer = styled(FooterAlign)``;

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
