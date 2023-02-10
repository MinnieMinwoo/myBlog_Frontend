import React from "react";
import styled from "styled-components";

import { CenterAlign } from "../../styles/PageView";

const FooterContainer = styled.div<{ isBorder?: boolean }>`
  border-top: ${(props) => (props.isBorder ? "1px solid #eee" : "")};
  padding: 20px 0;
`;

const FooterAlign = styled(CenterAlign)``;

const TextBox = styled.p`
  margin: 10px 0;
  font-size: 0.875em;
  color: #777;
`;

interface Props {
  isBorder: boolean;
}

const Footer = ({ isBorder }: Props) => {
  return (
    <FooterContainer isBorder={isBorder} className="HomeFooter">
      <FooterAlign>
        <TextBox> 2023 My own blog project</TextBox>
        <TextBox> © Snowcat</TextBox>
      </FooterAlign>
    </FooterContainer>
  );
};

Footer.defaultProps = {
  isBorder: true,
};

export default Footer;
