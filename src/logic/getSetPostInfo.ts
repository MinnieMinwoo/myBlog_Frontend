import { dbService } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  deleteField,
} from "firebase/firestore";

import { getUserNickname } from "./getUserInfo";

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

export const deleteUserPost = async (docId: string): Promise<void> => {
  const docRefPre = doc(dbService, `posts`, docId);
  const docRefDetail = doc(dbService, `posts/${docId}/detail`, docId);
  await deleteDoc(docRefDetail);
  await deleteDoc(docRefPre);
};
