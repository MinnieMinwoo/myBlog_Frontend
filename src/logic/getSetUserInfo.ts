import { authService, dbService } from "./firebase";
import {
  query,
  collection,
  where,
  doc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  User,
  updateProfile,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import { deleteImg, uploadImg } from "./getSetImage";
import { getUserPostList, deletePost } from "./getSetPostInfo";

interface DocData {
  nickname?: string;
  description?: string;
}

export const addUserData = async (uid: string) => {
  const userDetail: DocData = {
    nickname: uid,
    description: "Hello",
  };
  await setDoc(doc(dbService, "users", uid), userDetail);
};

export const getUserData = async (user: User): Promise<UserData> => {
  const userDocRef = doc(dbService, `users`, user.uid);
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
};

export const getUserUID = async (nickname: string): Promise<string> => {
  const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].id;
};

export const getUserNickname = async (uid: string): Promise<string> => {
  const userDocRef = doc(dbService, "users", uid);
  const userDocData = (await getDoc(userDocRef)).data() as DocData;
  return userDocData?.nickname ?? "";
};

export const updateUserImage = async (
  isOwnImage: boolean,
  uid: string,
  file: File
): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    if (isOwnImage) deleteImg(`$profile/${uid}`);
    if (authService.currentUser)
      try {
        const imageURL = await uploadImg(file, `$profile/${uid}`);
        if (!imageURL) throw console.log("no image data");
        await updateProfile(authService.currentUser, {
          photoURL: imageURL,
        });
        resolve(imageURL);
      } catch (error) {
        reject(error);
      }
  });
};

export const updateUserProfile = async (uid: string, nickname: string, description: string) => {
  const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs[0]) throw window.alert("Profile update error: Duplicate nickname");
  const userDocRef = doc(dbService, "users", uid);
  const profile = {
    nickname: nickname,
    description: description,
  };
  await updateDoc(userDocRef, profile);
};

export const deleteUserData = async (uid: string) => {
  const user = authService.currentUser;
  if (!user || user.uid !== uid) throw window.alert("Withdrawal error: wrong uid data");
  if (!user.email) throw window.alert("Withdrawal error: wrong email data");
  let password = "";
  while (password === "") {
    password = window.prompt("Enter your account password") ?? "";
  }
  const credential = EmailAuthProvider.credential(user.email, password);
  try {
    await reauthenticateWithCredential(user, credential);
  } catch {
    throw window.alert("Withdrawal error: wrong password");
  }
  const docList = await getUserPostList(uid);
  docList.forEach((doc) => {
    deletePost(doc.id);
  });
  const userDocRef = doc(dbService, "users", uid);
  await deleteDoc(userDocRef);
  if (user.photoURL) deleteImg(user.photoURL);
  await deleteUser(user);
};
