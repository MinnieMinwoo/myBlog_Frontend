import { useSetRecoilState } from "recoil";
import { loginData } from "../states/LoginState";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { getUserData } from "./getSetUserInfo";

export const useAuthObserver = async () => {
  const auth = getAuth();
  const setUserData = useSetRecoilState(loginData);
  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserData(user);
        setUserData(userData);
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
};
