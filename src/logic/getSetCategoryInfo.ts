import { doc, getDoc } from "firebase/firestore";
import { dbService } from "./firebase";

interface CategoryData {
  mainfield: string;
  subfield: string[];
  thumbnailLink: string;
}

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
          mainfield: category,
          subfield: subCategory?.subfield ?? [],
          thumbnailLink: subCategory?.thumbnailLink ?? "",
        });
      })
    );
    console.log(categoryData);
    return categoryData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
