import { arrayUnion, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { dbService } from "./firebase";

/** Get Category Data by user uid*/
export const getCategoryData = async (uid: string) => {
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
