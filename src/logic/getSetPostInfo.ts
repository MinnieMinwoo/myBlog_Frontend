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
  limit,
  getCountFromServer,
  QueryDocumentSnapshot,
  DocumentData,
  startAfter,
  Query,
  and,
  or,
  QueryConstraint,
  QueryFilterConstraint,
} from "firebase/firestore";

import { getUserNickname, getUserUID } from "./getSetUserInfo";

export const getUserPostNumber = async (uid: string): Promise<number> => {
  const q = query(collection(dbService, "posts"), where("createdBy", "==", uid));
  try {
    const snapShot = await getCountFromServer(q);
    return snapShot.data().count;
  } catch (error) {
    throw error;
  }
};

export const getPostNumByCategory = async (uid: string, mainCategory: string, subCategory: string): Promise<number> => {
  const q = query(
    collection(dbService, "posts"),
    where("createdBy", "==", uid),
    where("category", "==", [mainCategory, subCategory])
  );
  try {
    const snapShot = await getCountFromServer(q);
    return snapShot.data().count;
  } catch (error) {
    throw error;
  }
};

export const getUserAllPost = async (uid: string): Promise<PostData[]> => {
  const q = query(
    collection(dbService, "posts"),
    where("createdBy", "==", uid),
    orderBy("createdAt", "desc"),
    limit(10)
  );
  try {
    const querySnapshot = await getDocs(q);
    const docList: PostData[] = [];
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
  } catch (error) {
    throw error;
  }
};

export const getUserPostList = async (
  uid: string,
  postIndex?: QueryDocumentSnapshot<DocumentData>
): Promise<{
  index: QueryDocumentSnapshot<DocumentData>;
  data: PostData[];
}> => {
  const q = query(
    collection(dbService, "posts"),
    where("createdBy", "==", uid),
    orderBy("createdAt", "desc"),
    startAfter(postIndex ?? ""),
    limit(10)
  );
  try {
    const querySnapshot = await getDocs(q);
    const docData: PostData[] = [];
    querySnapshot.forEach((doc) => {
      docData.push({
        id: doc.id,
        createdAt: doc.data().createdAt,
        createdBy: doc.data().createdBy,
        tag: doc.data().tag,
        thumbnailData: doc.data().thumbnailData,
        thumbnailImageURL: doc.data().thumbnailImageURL,
        title: doc.data().title,
      });
    });
    return { index: querySnapshot.docs[querySnapshot.docs.length - 1], data: docData };
  } catch (error) {
    throw error;
  }
};

export const getPostListByCategory = async (
  uid: string,
  mainCategory: string,
  subCategory: string,
  index?: QueryDocumentSnapshot<DocumentData>
): Promise<{
  index: QueryDocumentSnapshot<DocumentData>;
  data: PostData[];
}> => {
  const q = query(
    collection(dbService, "posts"),
    where("createdBy", "==", uid),
    where("category", "==", [mainCategory, subCategory]),
    orderBy("createdAt", "desc"),
    startAfter(index ?? ""),
    limit(10)
  );
  try {
    const querySnapshot = await getDocs(q);
    const docList: PostData[] = [];
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
    return { index: querySnapshot.docs[querySnapshot.docs.length - 1], data: docList };
  } catch (error) {
    throw error;
  }
};

export const getPostListByQuery = async (
  queryData: string,
  userName = "",
  index?: QueryDocumentSnapshot<DocumentData>
): Promise<{
  index: QueryDocumentSnapshot<DocumentData>;
  data: PostData[];
}> => {
  try {
    let q: Query<DocumentData>;
    if (userName) {
      const uid = await getUserUID(userName);
      q = query(
        collection(dbService, "posts"),

        orderBy("title"),
        and(
          where("createdBy", "==", uid),
          or(
            where("tag", "array-contains-any", queryData.split(" ")),
            and(where("title", ">=", queryData), where("title", "<=", queryData + "\uf8ff"))
          )
        ) as unknown as QueryConstraint, // type check issue when sorting
        orderBy("createdAt", "desc"),
        startAfter(index ?? ""),
        limit(10)
      );
    } else {
      q = query(
        collection(dbService, "posts"),
        orderBy("title"),
        or(
          where("tag", "array-contains-any", queryData.split(" ")),
          and(where("title", ">=", queryData), where("title", "<=", queryData + "\uf8ff"))
        ) as unknown as QueryConstraint, // type check issue when sorting
        orderBy("createdAt", "desc"),
        startAfter(index ?? ""),
        limit(10)
      );
    }
    const querySnapshot = await getDocs(q);
    const docList: PostData[] = [];
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
    return { index: querySnapshot.docs[querySnapshot.docs.length - 1], data: docList };
  } catch (error) {
    throw error;
  }
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
      likes: postDetail?.likes ?? [],
      detail: postDetail?.detail ?? "",
      nickname: nickname,
      imageList: postDetail?.imageList ?? [],
    };
  } catch (error) {
    throw error;
  }
};

export const setPost = async (postData: PostEditData, userData: UserData): Promise<string> => {
  // eslint-disable-next-line no-useless-escape
  const thumbnailObj = {
    title: postData.title,
    tag: postData.tag,
    category: postData.category,
    thumbnailData: postData.thumbnailData,
    thumbnailImageURL: postData.thumbnailImgLink,
    createdBy: userData.uid,
    createdAt: Date.now(),
  };
  const dataObj = {
    imageList: postData.imageList,
    detail: postData.postData,
    likes: [],
  };
  try {
    const docs = await addDoc(collection(dbService, "posts"), thumbnailObj);
    await setDoc(doc(dbService, `posts/${docs.id}/detail`, docs.id), dataObj);
    return docs.id;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id: string, postData: PostEditData) => {
  const thumbnailObj = {
    title: postData.title,
    tag: postData.tag,
    category: postData.category,
    thumbnailData: postData.thumbnailData,
    thumbnailImageURL: postData.thumbnailImgLink,
  };
  const detailObj = {
    detail: postData.postData,
    imageList: postData.imageList,
  };
  try {
    const thumbnailRef = doc(dbService, "posts", id);
    const detailRef = doc(dbService, `posts/${id}/detail`, id);
    await updateDoc(thumbnailRef, thumbnailObj);
    await updateDoc(detailRef, detailObj);
  } catch (error) {
    throw error;
  }
};

export const updateLikes = async (id: string, likes: string[]) => {
  const detailObj = {
    likes: likes,
  };

  try {
    const detailRef = doc(dbService, `posts/${id}/detail`, id);
    await updateDoc(detailRef, detailObj);
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (docId: string): Promise<void> => {
  const docRefPre = doc(dbService, `posts`, docId);
  const docRefDetail = doc(dbService, `posts/${docId}/detail`, docId);
  const docRefComment = doc(dbService, `posts/${docId}/comments`, docId);
  try {
    await deleteDoc(docRefDetail);
    await deleteDoc(docRefPre);
    await deleteDoc(docRefComment);
  } catch (error) {
    throw error;
  }
};
