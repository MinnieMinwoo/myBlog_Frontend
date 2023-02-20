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
  updateDoc,
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
  try {
    const docRefPre = doc(dbService, `posts`, docId);
    const docRefDetail = doc(dbService, `posts/${docId}/detail`, docId);
    const postPreview = (await getDoc(docRefPre)).data() as PostData;
    const postDetail = (await getDoc(docRefDetail)).data();
    if (!postDetail) {
      const error = { name: "URL_Error", code: "No_PostData" };
      throw error;
    }
    const nickname = await getUserNickname(postPreview.createdBy);
    return {
      ...postPreview,
      id: docId,
      likes: postDetail?.likes ?? 0,
      detail: postDetail?.detail ?? "",
      nickname: nickname,
      imageList: postDetail?.imageList ?? [],
    };
  } catch (error) {
    throw error;
  }
};

export const addPost = async (postData: postEditData, userData: UserData): Promise<string> => {
  // eslint-disable-next-line no-useless-escape
  const thumbnailObj = {
    title: postData.title.substring(0, 31),
    createdBy: userData.uid,
    createdAt: Date.now(),
    tag: "",
    category: [],
    thumbnailData: postData.thumbnailData,
    thumbnailImageURL: postData.thumbnailImgLink,
  };
  const dataObj = {
    imageList: postData.imageList,
    detail: postData.postData,
    likes: 0,
  };
  try {
    const docs = await addDoc(collection(dbService, "posts"), thumbnailObj);
    await setDoc(doc(dbService, `posts/${docs.id}/detail`, docs.id), dataObj);
    return docs.id;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id: string, postData: postEditData) => {
  const thumbnailObj = {
    title: postData.title,
    tag: "",
    category: [],
    thumbnailData: postData.thumbnailData,
    thumbnailImageURL: postData.thumbnailImgLink,
  };
  const detailObj = {
    detail: postData.postData,
  };
  const imageListObj = {
    imageList: postData.imageList,
  };
  try {
    const thumbnailRef = doc(dbService, "posts", id);
    const detailRef = doc(dbService, `posts/${id}/detail`, id);
    const imageListRef = doc(dbService, `posts/${id}/imageList`, id);
    await updateDoc(thumbnailRef, thumbnailObj);
    await updateDoc(detailRef, detailObj);
    await updateDoc(imageListRef, imageListObj);
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
