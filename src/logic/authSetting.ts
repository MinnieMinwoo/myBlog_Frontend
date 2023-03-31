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
        url: "http://localhost:3000/myBlog_Frontend#/",
        handleCodeInApp: true,
      };
      await sendEmailVerification(data.user, actionCodeSettings);
      throw new Error("Email Verification");
    }
    const nickname = await getUserNickname(data.user.uid);
    return nickname;
  } catch (error) {
    throw error;
  }
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
    throw console.log("Password error: wrong password");
  }
  await updateEmail(user, newEmail);
  const actionCodeSettings = {
    url: "http://localhost:3000/myBlog_Frontend#/",
    handleCodeInApp: true,
  };
  await sendEmailVerification(user, actionCodeSettings);
};

export const linkEmail = async (email: string, password: string) => {
  const auth = getAuth();
  if (!auth.currentUser) return;
  const user = auth.currentUser;

  await addUserData(user.uid);
  const credential = EmailAuthProvider.credential(email, password);
  try {
    await linkWithCredential(user, credential);
  } catch (error) {
    throw error;
  }
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
