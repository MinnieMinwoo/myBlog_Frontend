import React from "react";
import { useRecoilState } from "recoil";
import { isAuthInit } from "./states/LoadingState";

import { useAuthObserver } from "./logic/authSetting";

import Loading from "./components/Share/Loading";
import AppRouter from "./AppRouter";

const App = () => {
  const [init, setInit] = useRecoilState(isAuthInit);

  useAuthObserver().then(() => {
    setInit(true);
  });

  return (
    <div className={`App`}>
      {init ? null : <Loading />}
      <AppRouter />
    </div>
  );
};

export default App;
