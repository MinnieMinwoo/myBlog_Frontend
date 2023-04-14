import React, { Suspense, useState } from "react";

import AppRouter from "./AppRouter";
import AlertToast from "./components/Share/AlertToast";
import AlertModal from "./components/Share/AlertModal";

import "./styles/App.css";
import { useListenAuth } from "./logic/authSetting";
import Loading from "./components/Share/Loading";

const App = () => {
  const isLoading = useListenAuth();

  return (
    <div className={`App`}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AlertModal />
          <AlertToast />
          <AppRouter />
        </>
      )}
    </div>
  );
};

export default App;
