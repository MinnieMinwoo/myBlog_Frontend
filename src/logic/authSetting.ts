import { useSetRecoilState } from "recoil";
import { loginData } from "../states/LoginState";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  GoogleAuthProvider,
  linkWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { getUserNickname, getUserData, addUserData } from "./getSetUserInfo";

export const useAuthObserver = async () => {
  const auth = getAuth();
  const setUserData = useSetRecoilState(loginData);
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
};

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

export const updateUserEmail = async (newEmail: string, password: string) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user?.email) throw console.log("Email update error: wrong email data");
  const credential = EmailAuthProvider.credential(user.email, password);
  try {
    await reauthenticateWithCredential(user, credential);
  } catch {
    throw console.log("Withdrawal error: wrong password");
  }
  await updateEmail(user, newEmail);
  const actionCodeSettings = {
    url: "http://localhost:3000/myBlog_Frontend#/",
    handleCodeInApp: true,
  };
  await sendEmailVerification(user, actionCodeSettings);
};

export const linkSocialLogin = async (provider: string) => {
  const auth = getAuth();
  if (!auth.currentUser) return;

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  try {
    switch (provider) {
      case "google":
        await linkWithPopup(auth.currentUser, googleProvider);
        break;
      case "facebook":
        await linkWithPopup(auth.currentUser, facebookProvider);
        break;
      case "twitter":
        await linkWithPopup(auth.currentUser, twitterProvider);
        break;
      default:
        break;
    }
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
