import { storageService } from "./firebase";
import { ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage";

export const uploadImg = async (data: File, saveUrl: string) => {
  return new Promise<string>((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = async (finishedEvent) => {
        const imgData = finishedEvent.target?.result as string;
        const imageRef = ref(storageService, saveUrl);
        const uploadRes = await uploadString(imageRef, imgData, "data_url");
        const imageUrl = await getDownloadURL(uploadRes.ref);
        resolve(imageUrl);
      };
    } catch (error) {
      console.log(error);
      reject(null);
    }
  });
};

export const deleteImg = (deleteurl: string) => {
  const deleteRef = ref(storageService, deleteurl);
  deleteObject(deleteRef)
    .then(() => {})
    .catch(() => {});
};
