import {
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  arrayRemove,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { dbService } from "./firebase";
import { uuidv4 } from "@firebase/util";
import { uploadImg } from "./getSetImage";

/** Get Category List by user uid*/
export const getCategoryList = async (uid: string) => {
  const categoryRef = doc(dbService, `users/${uid}/category`, uid);
  try {
    const categoryList = (await getDoc(categoryRef)).data();
    if (!categoryList?.order || !Array.isArray(categoryList?.order)) return [];
    const categoryData: CategoryData[] = [];
    await Promise.all(
      categoryList.order.map(async (category) => {
        const subCategoryRef = doc(dbService, `users/${uid}/category`, category);
        const subCategory = (await getDoc(subCategoryRef)).data();
        categoryData.push({
          mainField: category,
          subField: subCategory?.subfield ?? [],
          thumbnailLink: subCategory?.thumbnailLink ?? [],
        });
      })
    );
    return categoryData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/** Get Category Thumbnail*/
export const getCategoryThumbnail = async (
  uid: string,
  mainCategory: string,
  subCategory: string
) => {
  const subCategoryRef = doc(dbService, `users/${uid}/category`, mainCategory);
  try {
    const categoryList = (await getDoc(subCategoryRef)).data();
    if (!(categoryList?.subfield && categoryList?.thumbnailLink)) return "";
    const { subfield, thumbnailLink } = categoryList;
    return subfield.indexOf(subCategory) ? thumbnailLink[subfield.indexOf(subCategory)] : "";
  } catch (error) {
    console.log(error);
    return [];
  }
};

/** Add Main Category Data*/
export const setMainCategoryData = async (name: string, uid: string) => {
  try {
    const categoryRef = doc(dbService, `users/${uid}/category`, `${uid}`);
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${name}`);
    await updateDoc(categoryRef, { order: arrayUnion(name) });
    await setDoc(subCategoryRef, {
      subfield: [],
      thumbnailLink: [],
    });
  } catch (error) {
    throw error;
  }
};

/** Add Sub Category Data*/
export const setSubCategoryData = async (mainCategory: CategoryData, name: string, uid: string) => {
  const copyCategory = mainCategory;
  copyCategory.subField.push(name);
  copyCategory.thumbnailLink.push("");
  try {
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${copyCategory.mainField}`);
    await setDoc(subCategoryRef, {
      subfield: copyCategory.subField,
      thumbnailLink: copyCategory.thumbnailLink,
    });
    return copyCategory;
  } catch (error) {
    throw error;
  }
};

/** Delete Main Category Data*/
export const deleteMainCategoryData = async (name: string, uid: string) => {
  try {
    const q = query(
      collection(dbService, `posts`),
      where("createdBy", "==", uid),
      where("category", "array-contains", name)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      if (document.data().category[0] === name) {
        updateDoc(doc(dbService, `posts`, document.id), { category: [] });
      }
    });
    const categoryRef = doc(dbService, `users/${uid}/category`, `${uid}`);
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${name}`);
    await updateDoc(categoryRef, { order: arrayRemove(name) });
    await deleteDoc(subCategoryRef);
  } catch (error) {
    throw error;
  }
};

/** Delete Sub Category Data*/
export const deleteSubCategoryData = async (
  mainCategory: CategoryData,
  name: string,
  uid: string
) => {
  const editCateGory: CategoryData = {
    mainField: mainCategory.mainField,
    subField: [],
    thumbnailLink: [],
  };
  mainCategory.subField.forEach((element, index) => {
    if (element !== name) {
      editCateGory.subField.push(element);
      editCateGory.thumbnailLink.push(mainCategory.thumbnailLink[index]);
    }
  });
  try {
    const q = query(
      collection(dbService, `posts`),
      where("createdBy", "==", uid),
      where("category", "==", [mainCategory.mainField, name])
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      updateDoc(doc(dbService, `posts`, document.id), { category: [] });
    });
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${editCateGory.mainField}`);
    await updateDoc(subCategoryRef, {
      subfield: editCateGory.subField,
      thumbnailLink: editCateGory.thumbnailLink,
    });
    return editCateGory;
  } catch (error) {
    throw error;
  }
};

/** Edit Main Category Data
 * Delete exist categoryData and add new categoryData because firestore does not support rename doc
 */
export const editMainCategoryData = async (
  categoryList: string[],
  mainCategory: CategoryData,
  name: string,
  uid: string
) => {
  const { mainField, subField, thumbnailLink } = mainCategory;
  try {
    await deleteMainCategoryData(mainField, uid);
    const categoryRef = doc(dbService, `users/${uid}/category`, `${uid}`);
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${name}`);
    await updateDoc(categoryRef, { order: categoryList });
    await setDoc(subCategoryRef, {
      subfield: mainCategory.subField,
      thumbnailLink: mainCategory.thumbnailLink,
    });
    return {
      mainField: name,
      subField: subField,
      thumbnailLink: thumbnailLink,
    };
  } catch (error) {
    throw error;
  }
};

/** Edit Sub Category Data */
export const editSubCategoryData = async (
  mainCategory: CategoryData,
  existName: string,
  newName: string,
  uid: string
) => {
  const { mainField, subField } = mainCategory;
  const newSubField = subField.map((element) => (element === existName ? newName : element));
  try {
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${mainField}`);
    await updateDoc(subCategoryRef, {
      subfield: newSubField,
    });
    return newSubField;
  } catch (error) {
    throw error;
  }
};

/** Edit Thumbnail Image Data */
export const setCategoryThumbnail = async (file: File) => {
  return uploadImg(file, `$category/${uuidv4()}`);
};

/** Update Thumbnail Image List URL */
export const setCategoryThumbnailList = async (
  thumbnailArray: string[],
  mainField: string,
  uid: string
) => {
  try {
    const subCategoryRef = doc(dbService, `users/${uid}/category`, `${mainField}`);
    await updateDoc(subCategoryRef, {
      thumbnailLink: thumbnailArray,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
