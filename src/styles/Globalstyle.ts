import { createGlobalStyle } from "styled-components";

import notoSansThin from "../assets/fonts/NotoSansKR-Thin.woff";
import notoSansLight from "../assets/fonts/NotoSansKR-Light.woff";
import notoSansRegular from "../assets/fonts/NotoSansKR-Regular.woff";
import notoSansMedium from "../assets/fonts/NotoSansKR-Medium.woff";
import notoSansBold from "../assets/fonts/NotoSansKR-Bold.woff";
import notoSansBlack from "../assets/fonts/NotoSansKR-Black.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NotoSans";
    src: url(${notoSansThin}) format('woff');
    font-weight: 100;
  }
  @font-face {
    font-family: "NotoSans";
    src: url(${notoSansLight}) format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: "NotoSans";
    src: url(${notoSansRegular}) format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: "NotoSans";
    src: url(${notoSansMedium}) format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: "NotoSans";
    src: url(${notoSansBold}) format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: "NotoSans";
    src: url(${notoSansBlack}) format('woff');
    font-weight: 900;
  }
        
  * {
      font-family: 'NotoSans', sans-serif;
      margin: 0;
      padding: 0;
  }
`;

export default GlobalStyle;
