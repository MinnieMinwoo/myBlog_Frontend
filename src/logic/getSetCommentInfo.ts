import { doc, getDoc } from "firebase/firestore";
import { dbService } from "./firebase";

export const getComments = async (docId: string) => {
  const docRef = doc(dbService, `posts/${docId}/comments`, docId);
  try {
    const commentData = (await getDoc(docRef)).data();
    return (commentData?.comments as CommentData[]) ?? [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
