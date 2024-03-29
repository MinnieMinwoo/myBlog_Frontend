import {
  getAuth,
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
  unlink,
  signInWithPopup,
  UserCredential,
  linkWithCredential,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getUserNickname, addUserData, getUserData } from "./getSetUserInfo";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { loginData } from "../states/LoginState";
import { query, collection, where, getDocs } from "firebase/firestore";
import { dbService } from "./firebase";
import { FirebaseError } from "firebase/app";

export const useListenAuth = () => {
  const setAuth = useSetRecoilState(loginData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          let [isGoogleLink, isFacebookLink, isTwitterLink] = [false, false, false];
          user.providerData.forEach((element) => {
            if (element.providerId === "google.com") isGoogleLink = true;
            if (element.providerId === "facebook.com") isFacebookLink = true;
            if (element.providerId === "twitter.com") isTwitterLink = true;
          });
          setIsLoading(true);
          const userData = await getUserData(user);
          setAuth({
            ...userData,
            isGoogleLink: isGoogleLink,
            isFacebookLink: isFacebookLink,
            isTwitterLink: isTwitterLink,
          });
        } else {
          setAuth({
            isLoggedIn: false,
          });
        }
      } catch (error) {
        console.log(error);
        setAuth({
          isLoggedIn: false,
        });
      } finally {
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
};

export const signInEmail = async (email: string, password: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      const data = await signInWithEmailAndPassword(auth, email, password);
      if (!data.user.emailVerified) {
        const actionCodeSettings = {
          url: `https://${process.env.REACT_APP_DOMAIN as string}`,
          handleCodeInApp: true,
        };
        await sendEmailVerification(data.user, actionCodeSettings);
        await signOut(auth);
        resolve(null);
      }
      const nickname = await getUserNickname(data.user.uid);
      resolve(nickname);
    } catch (error) {
      reject(error);
    }
  });
};

export const signInSocialAccount = async (provider: string) => {
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  let data: UserCredential;
  try {
    switch (provider) {
      case "google":
        data = await signInWithPopup(auth, googleProvider);
        break;
      case "facebook":
        data = await signInWithPopup(auth, facebookProvider);
        break;
      case "twitter":
        data = await signInWithPopup(auth, twitterProvider);
        break;
      default:
        return;
    }

    let isEmail = false;
    data.user.providerData.forEach((e) => {
      if (e.providerId === "password") isEmail = true;
    });
    if (!isEmail) throw new Error("No Account");
    if (!data.user.emailVerified) {
      const actionCodeSettings = {
        url: `https://${process.env.REACT_APP_DOMAIN as string}`,
        handleCodeInApp: true,
      };
      await sendEmailVerification(data.user, actionCodeSettings);
      await signOut(auth);
      throw new Error("Email Verification");
    }
    const nickname = await getUserNickname(data.user.uid);
    return nickname;
  } catch (error) {
    throw error;
  }
};

export const signUpEmail = async (email: string, password: string, nickname: string): Promise<void> => {
  try {
    const reg = /^[a-zA-Z0-9!@#$%^&*()?_~]{4,20}$/;
    if (!reg.test(nickname)) throw new FirebaseError("auth/invalid-password", "Invalid nickname");
    const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size) throw new FirebaseError("auth/nickname-already-exists", "Nickname is already used");
    const auth = getAuth();
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await addUserData(data.user.uid, nickname);
    const actionCodeSettings = {
      url: `https://${process.env.REACT_APP_DOMAIN as string}`,
      handleCodeInApp: true,
    };
    await sendEmailVerification(data.user, actionCodeSettings);
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const updateUserEmail = async (newEmail: string, password: string) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user?.email) throw new Error("Entered invalid email data");
  const credential = EmailAuthProvider.credential(user.email, password);
  try {
    await reauthenticateWithCredential(user, credential);
  } catch (error) {
    throw error;
  }
  await updateEmail(user, newEmail);
  const actionCodeSettings = {
    url: `https://${process.env.REACT_APP_DOMAIN as string}`,
    handleCodeInApp: true,
  };
  await sendEmailVerification(user, actionCodeSettings);
};

export const linkEmail = async (email: string, password: string, nickname: string) => {
  try {
    const reg = /^[a-zA-Z0-9!@#$%^&*()?_~]{4,20}$/;
    if (!reg.test(nickname)) throw new FirebaseError("auth/invalid-password", "Invalid nickname");
    const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size) throw new FirebaseError("auth/nickname-already-exists", "Nickname is already used");
    const auth = getAuth();
    if (!auth.currentUser) return;
    const user = auth.currentUser;
    await addUserData(user.uid, nickname);
    const credential = EmailAuthProvider.credential(email, password);
    await linkWithCredential(user, credential);
    const actionCodeSettings = {
      url: `https://${process.env.REACT_APP_DOMAIN as string}`,
      handleCodeInApp: true,
    };
    await sendEmailVerification(user, actionCodeSettings);
  } catch (error) {
    throw error;
  }
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

export const unLInkSocialLogin = async (provider: string) => {
  const auth = getAuth();
  if (!auth.currentUser) return;

  try {
    switch (provider) {
      case "google":
        await unlink(auth.currentUser, "google.com");
        break;
      case "facebook":
        await unlink(auth.currentUser, "facebook.com");
        break;
      case "twitter":
        await unlink(auth.currentUser, "twitter.com");
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

export const passwordResetEmail = async (email: string) => {
  const auth = getAuth();
  const actionCodeSettings = {
    url: `https://${process.env.REACT_APP_DOMAIN as string}`,
    handleCodeInApp: true,
  };
  try {
    await sendPasswordResetEmail(auth, email, actionCodeSettings);
  } catch (error) {
    throw error;
  }
};
