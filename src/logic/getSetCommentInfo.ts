import { doc, getDoc, setDoc } from "firebase/firestore";
import { dbService } from "./firebase";

export const getComments = async (docId: string) => {
  const docRef = doc(dbService, `posts/${docId}/comments`, docId);
  try {
    const commentData = (await getDoc(docRef)).data();
    return (commentData?.comments as CommentData[]) ?? [];
  } catch (error) {
    throw error;
  }
};

export const updateComments = async (docId: string, newComments: CommentData[]) => {
  const docRef = doc(dbService, `posts/${docId}/comments`, docId);
  try {
    await setDoc(docRef, {
      comments: newComments,
    });
  } catch (error) {
    throw error;
  }
};
