import React from "react";

import AppRouter from "./AppRouter";
import AlertToast from "./components/Share/AlertToast";
import AlertModal from "./components/Share/AlertModal";

import "./styles/App.css";
import { useListenAuth } from "./logic/authSetting";

const App = () => {
  useListenAuth();

  return (
    <div className={`App`}>
      <AlertModal />
      <AlertToast />
      <AppRouter />
    </div>
  );
};

export default App;
