import styled from "styled-components";

export const CenterAlign = styled.div`
  @media (min-width: 1080px) {
    width: 80vw;
    margin-left: 10vw;
  }
`;

export const FooterAlign = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  section {
    flex: 1;
  }
`;
