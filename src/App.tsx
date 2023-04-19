import React from "react";

import AppRouter from "./AppRouter";
import AlertToast from "./components/Share/AlertToast";
import AlertModal from "./components/Share/AlertModal";

import "./styles/App.css";
import { useListenAuth } from "./logic/authSetting";
import Loading from "./components/Share/Loading";
import MetaTag from "./components/Share/MetaTag";

const App = () => {
  const isLoading = useListenAuth();

  return (
    <div className={`App`}>
      <MetaTag title="myBlog" description="Make your own blog" />
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
