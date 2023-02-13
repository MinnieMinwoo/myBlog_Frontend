import { useSetRecoilState } from "recoil";
import { loginData } from "../states/LoginState";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getUserData, getUserNickname, addUserData } from "./getSetUserInfo";

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

export const signInEmail = async (email: string, password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      const data = await signInWithEmailAndPassword(auth, email, password);
      const nickname = await getUserNickname(data.user.uid);
      resolve(nickname);
    } catch (error) {
      reject(error);
    }
  });
};

export const signUpEmail = async (email: string, password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await addUserData(data.user.uid);
      resolve(data.user.uid); //Nickname is uid when create account
    } catch (error) {
      reject(error);
    }
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
