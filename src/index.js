import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./Globalstyle";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
