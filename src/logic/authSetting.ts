import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

import { getUserNickname, addUserData } from "./getSetUserInfo";

export const signInEmail = async (email: string, password: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      const data = await signInWithEmailAndPassword(auth, email, password);
      if (!data.user.emailVerified) {
        const actionCodeSettings = {
          url: "http://localhost:3000/myBlog_Frontend#/",
          handleCodeInApp: true,
        };
        await sendEmailVerification(data.user, actionCodeSettings);
        resolve(null);
      }
      const nickname = await getUserNickname(data.user.uid);
      resolve(nickname);
    } catch (error) {
      reject(error);
    }
  });
};

export const signUpEmail = async (email: string, password: string): Promise<null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await addUserData(data.user.uid);
      const actionCodeSettings = {
        url: "http://localhost:3000/myBlog_Frontend#/",
        handleCodeInApp: true,
      };
      await sendEmailVerification(data.user, actionCodeSettings);
      resolve(null);
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
