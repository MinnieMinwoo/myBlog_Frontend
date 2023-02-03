import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";
import GlobalStyle from "./styles/Globalstyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecoilRoot>
  </>
);
