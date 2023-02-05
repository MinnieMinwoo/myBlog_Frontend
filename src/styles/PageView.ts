import styled from "styled-components";

export const BlogContainer = styled.section`
  @media (min-width: 1080px) {
    display: flex;
    width: 80vw;
    margin-left: 10vw;
    justify-content: space-around;
  }
`;

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
