import { dbService } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const getPostData = async (docId: string): Promise<PostDetail> => {
    const docRefPre = doc(dbService, `posts`, docId);
    const docRefDetail = doc(dbService, `posts/${docId}/detail`, docId);
    const postPreview = (await getDoc(docRefPre)).data() as PostData;
    const postDetail = (await getDoc(docRefDetail)).data();
    return {
        ...postPreview,
        likes: postDetail?.likes ?? 0,
        detail: postDetail?.detail ?? "",
    };
};
