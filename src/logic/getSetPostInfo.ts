import { dbService } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { getUserNickname } from "./getSetUserInfo";

export const getUserPostList = async (uid: string): Promise<PostData[]> => {
  const q = query(
    collection(dbService, "posts"),
    where("createdBy", "==", uid),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  let docList: PostData[] = [];
  querySnapshot.forEach((doc) => {
    docList.push({
      id: doc.id,
      createdAt: doc.data().createdAt,
      createdBy: doc.data().createdBy,
      tag: doc.data().tag,
      thumbnailData: doc.data().thumbnailData,
      thumbnailImageURL: doc.data().thumbnailImageURL,
      title: doc.data().title,
    });
  });
  return docList;
};

export const getPostData = async (docId: string): Promise<PostDetail> => {
  const docRefPre = doc(dbService, `posts`, docId);
  const docRefDetail = doc(dbService, `posts/${docId}/detail`, docId);
  const postPreview = (await getDoc(docRefPre)).data() as PostData;
  const postDetail = (await getDoc(docRefDetail)).data();
  const nickname = await getUserNickname(postPreview.createdBy);
  return {
    ...postPreview,
    likes: postDetail?.likes ?? 0,
    detail: postDetail?.detail ?? "",
    nickname: nickname,
  };
};

export const addPost = async (title: string, postData: string, userData: UserData) => {
  // eslint-disable-next-line no-useless-escape
  const reg = /[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
  const thumbnailObj = {
    title: title,
    createdBy: userData.uid,
    createdAt: Date.now(),
    tag: "",
    category: [],
    thumbnailData: postData.replace(reg, "").substring(0, 151),
    thumbnailImageURL: "",
  };
  const dataObj = {
    detail: postData,
    likes: 0,
  };
  try {
    const docs = await addDoc(collection(dbService, "posts"), thumbnailObj);
    await setDoc(doc(dbService, `posts/${docs.id}/detail`, docs.id), dataObj);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (docId: string): Promise<void> => {
  const docRefPre = doc(dbService, `posts`, docId);
  const docRefDetail = doc(dbService, `posts/${docId}/detail`, docId);
  await deleteDoc(docRefDetail);
  await deleteDoc(docRefPre);
};
