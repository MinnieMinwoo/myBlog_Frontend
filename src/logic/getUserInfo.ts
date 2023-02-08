import { dbService } from "./firebase";
import { query, collection, where, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { User } from "firebase/auth";

interface DocData {
  nickname?: string;
  description?: string;
}

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

export const addUserData = async (uid: string) => {
  const userDetail: DocData = {
    nickname: uid,
    description: "Hello",
  };
  await setDoc(doc(dbService, "users", uid), userDetail);
};

export const getUserUID = async (nickname: string): Promise<string> => {
  const q = query(collection(dbService, "users"), where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs[0]);
  return querySnapshot.docs[0].id;
};

export const getUserNickname = async (uid: string): Promise<string> => {
  const userDocRef = doc(dbService, `users`, uid);
  const userDocData = (await getDoc(userDocRef)).data() as DocData;
  return userDocData?.nickname ?? "";
};
