import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { useSetRecoilState } from "recoil";
import { loginData } from "./states/LoginState";
import { authService } from "./logic/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { getUserData } from "./logic/getUserInfo";

const App = () => {
  const [init, setInit] = useState(false);
  const setUserData = useSetRecoilState(loginData);

  useEffect(() => {
    try {
      onAuthStateChanged(authService, async (user) => {
        if (user) {
          const userData = await getUserData(user);
          setUserData(userData);
        } else {
          setUserData({
            isLoggedIn: false,
          });
        }
        setInit(true);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div className={`App`}>{init ? <AppRouter /> : <div>initializing...</div>}</div>;
};

export default App;
