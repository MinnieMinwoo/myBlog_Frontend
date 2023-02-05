import React from "react";
import styled from "styled-components";

import { CenterAlign } from "../../styles/PageView";
import image from "../../assets/images/logo.png";

const Logo = styled.img`
  width: 75px;
  height: 75px;
`;

const MainHeader = () => {
  return (
    <header className="MainHeader">
      <CenterAlign>
        <Logo src={image} alt="blog logo" />
      </CenterAlign>
    </header>
  );
};

export default MainHeader;
