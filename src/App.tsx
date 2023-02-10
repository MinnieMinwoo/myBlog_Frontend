import React, { useState } from "react";

import { useAuthObserver } from "./logic/authSetting";

import Loading from "./components/Share/Loading";
import AppRouter from "./AppRouter";
import "./App.css";

const App = () => {
  const [init, setInit] = useState(false);

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
