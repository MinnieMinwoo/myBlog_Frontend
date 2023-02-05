import React from "react";
import styled from "styled-components";

import { CenterAlign } from "../../styles/PageView";

const MainFooter = styled.div`
  border-top: 1px solid #eee;
  padding: 20px 0;
`;

const FooterAlign = styled(CenterAlign)``;

const TextBox = styled.p`
  margin: 10px 0;
  font-size: 0.875em;
  color: #777;
`;

const HomeFooter = () => {
  return (
    <MainFooter className="HomeFooter">
      <FooterAlign>
        <TextBox> 2023 My own blog project</TextBox>
        <TextBox> © Snowcat</TextBox>
      </FooterAlign>
    </MainFooter>
  );
};

export default HomeFooter;
