import { storageService } from "./firebase";
import { ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage";

export const uploadImg = async (data: File, saveUrl: string): Promise<string> => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(data);
    reader.onloadend = async (event) => {
      const imgData = event.target?.result as string;
      const imageRef = ref(storageService, saveUrl);
      try {
        const uploadRes = await uploadString(imageRef, imgData, "data_url");
        const imageUrl = await getDownloadURL(uploadRes.ref);
        resolve(imageUrl);
      } catch (error) {
        reject(error);
      }
    };
  });
};

export const deleteImg = (deleteurl: string) => {
  const deleteRef = ref(storageService, deleteurl);
  deleteObject(deleteRef);
};
