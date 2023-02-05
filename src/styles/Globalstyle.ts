import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Noto Sans KR";
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
}
* {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
