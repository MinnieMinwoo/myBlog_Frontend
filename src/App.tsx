import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isWaitingPost } from "./states/LoadingState";
import { loginData } from "./states/LoginState";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserData } from "./logic/getSetUserInfo";

import Loading from "./components/Share/Loading";
import AppRouter from "./AppRouter";

const App = () => {
  const waitingPost = useRecoilValue(isWaitingPost);
  const [userData, setUserData] = useRecoilState(loginData);
  useEffect(() => {
    const auth = getAuth();
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userData = await getUserData(user);
          setUserData(() => userData);
        } else {
          setUserData({
            isInit: true,
            isLoggedIn: false,
          });
        }
      });
    } catch (error) {
      console.log(error);
      setUserData({
        isInit: true,
        isLoggedIn: false,
      });
    } finally {
    }
  }, []);

  return (
    <div className={`App`}>
      {userData.isInit && !waitingPost ? null : <Loading />}
      <AppRouter />
    </div>
  );
};

export default App;
