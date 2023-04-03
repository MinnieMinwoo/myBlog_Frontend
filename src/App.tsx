import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isInit } from "./states/LoadingState";

import Loading from "./components/Share/Loading";
import AppRouter from "./AppRouter";
import { loginData } from "./states/LoginState";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserData } from "./logic/getSetUserInfo";
import AlertToast from "./components/Share/AlertToast";
import AlertModal from "./components/Share/AlertModal";

import "./styles/App.css";

const App = () => {
  const [init, setInit] = useRecoilState(isInit);
  const setUserData = useSetRecoilState(loginData);
  const auth = getAuth();

  useEffect(() => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          let [isGoogleLink, isFacebookLink, isTwitterLink] = [false, false, false];
          user.providerData.forEach((element) => {
            if (element.providerId === "google.com") isGoogleLink = true;
            if (element.providerId === "facebook.com") isFacebookLink = true;
            if (element.providerId === "twitter.com") isTwitterLink = true;
          });
          const userData = await getUserData(user);
          setUserData({
            ...userData,
            isGoogleLink: isGoogleLink,
            isFacebookLink: isFacebookLink,
            isTwitterLink: isTwitterLink,
          });
        } else {
          setUserData({
            isLoggedIn: false,
          });
        }
      });
    } catch (error) {
      console.log(error);
      setUserData({
        isLoggedIn: false,
      });
    }
    setInit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`App`}>
      {init ? null : <Loading />}
      <AlertModal />
      <AlertToast />
      <AppRouter />
    </div>
  );
};

export default App;
