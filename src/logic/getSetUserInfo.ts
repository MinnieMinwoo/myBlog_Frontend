import { authService, dbService } from "./firebase";
import { query, collection, where, doc, getDoc, setDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { User, updateProfile, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

import { deleteImg, uploadImg } from "./getSetImage";
import { getUserAllPost, deletePost } from "./getSetPostInfo";

interface DocData {
  nickname?: string;
  description?: string;
}

export const addUserData = async (uid: string, nickname: string) => {
  const userDetail: DocData = {
    nickname: nickname,
    description: "Hello",
  };
  const userCategory = { order: [] };
  const userAbout = { content: "" };
  try {
    await setDoc(doc(dbService, "users", uid), userDetail);
    await setDoc(doc(dbService, `users/${uid}/category`, uid), userCategory);
    await setDoc(doc(dbService, `users/${uid}/about`, uid), userAbout);
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (user: User): Promise<UserData> => {
  const userDocRef = doc(dbService, `users`, user.uid);
  try {
    const userDocData = (await getDoc(userDocRef)).data() as DocData;
    const token = await user.getIdToken();
    return {
      isLoggedIn: true,
      email: user.email ?? "",
      photoURL: user.photoURL ?? "",
      uid: user.uid,
      accessToken: token,
      nickname: userDocData?.nickname ?? "",
      description: userDocData?.description ?? "",
    };
  } catch (error) {
    throw error;
  }
};

export const getUserUID = async (nickname: string): Promise<string> => {
  const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs[0].id;
  } catch (error) {
    throw error;
  }
};

export const getUserNickname = async (uid: string): Promise<string> => {
  const userDocRef = doc(dbService, "users", uid);
  try {
    const userDocData = (await getDoc(userDocRef)).data() as DocData;
    return userDocData?.nickname ?? "";
  } catch (error) {
    throw error;
  }
};

export const updateUserImage = async (isOwnImage: boolean, uid: string, file: File): Promise<string> => {
  if (isOwnImage) deleteImg(`$profile/${uid}`);
  if (!authService.currentUser) throw console.log("no user data");
  try {
    const imageURL = await uploadImg(file, `$profile/${uid}`);
    if (!imageURL) throw console.log("no image data");
    await updateProfile(authService.currentUser, {
      photoURL: imageURL,
    });
    return imageURL;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (uid: string, nickname: string, description: string) => {
  const reg = /^[a-zA-Z0-9!@#$%^&*()?_~]{4,20}$/;
  console.log(nickname);
  console.log(reg.test(nickname));
  if (!reg.test(nickname)) throw window.alert("Profile update error: Invalid nickname");
  const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs[0] && querySnapshot.docs[0].id !== uid)
    throw window.alert("Profile update error: Duplicate nickname");
  const userDocRef = doc(dbService, "users", uid);
  const profile = {
    nickname: nickname,
    description: description,
  };
  await updateDoc(userDocRef, profile);
};

export const getUserAbout = async (uid: string): Promise<string> => {
  const userAboutRef = doc(dbService, `users/${uid}/about`, uid);
  try {
    const userAboutData = (await getDoc(userAboutRef)).data();
    return userAboutData?.content ?? "";
  } catch (error) {
    throw error;
  }
};

export const updateUserAbout = async (uid: string, data: string) => {
  const userAboutRef = doc(dbService, `users/${uid}/about`, uid);
  const content = { content: data };
  try {
    await updateDoc(userAboutRef, content);
  } catch (error) {
    throw error;
  }
};

export const deleteUserData = async (uid: string, password: string) => {
  const user = authService.currentUser;
  if (!user || user.uid !== uid) throw console.log("Withdrawal error: wrong uid data");
  if (!user.email) throw console.log("Withdrawal error: wrong email data");
  const credential = EmailAuthProvider.credential(user.email, password);
  try {
    await reauthenticateWithCredential(user, credential);
  } catch {
    throw console.log("Withdrawal error: wrong password");
  }
  const docList = await getUserAllPost(uid);
  docList.forEach((doc) => {
    deletePost(doc.id);
  });
  const userAboutRef = doc(dbService, `users/${uid}/about`, uid);
  const userCategoryRef = doc(dbService, `users/${uid}/category`, uid);
  const userDocRef = doc(dbService, "users", uid);
  deleteDoc(userAboutRef);
  deleteDoc(userCategoryRef);
  await deleteDoc(userDocRef);
  if (user.photoURL && user.photoURL.includes("myblog-backend.appspot.com")) deleteImg(user.photoURL);
  await deleteUser(user);
};
