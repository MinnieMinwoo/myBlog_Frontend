import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";

import { setSubCategoryData, editMainCategoryData, deleteMainCategoryData } from "../../logic/getSetCategoryInfo";
import PostCategoryCard from "./CategoryCard";
import { CategoryNameForm as inputForm } from "./CategoryForm";

interface Props {
  isEdit: boolean;
  categoryData: CategoryData[];
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const PostCategorySection = ({ isEdit, categoryData, setCategoryData }: Props) => {
  const userData = useRecoilValue(loginData);
  const categoryRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModal();
  const { openToast } = useToast();

  const setCategoryChange = async (name: string, mainID: number = -1) => {
    const targetCategory = categoryRef.current?.value ?? "";
    const uid = userData.uid;
    let copyArray = [...categoryData];

    // handle exception
    if (!uid) return openToast("Error", "Using corrupt data.", "danger");
    if ((name.includes("add") || name.includes("delete")) && mainID === -1)
      return openToast("Error", "Using corrupt data.", "danger");

    if (name.includes("add") || name.includes("edit")) {
      if (!targetCategory) return openToast("Error", "Using corrupt data.", "danger");
      for (const category of categoryData) {
        if (
          (name.includes("Main") && category.mainField === targetCategory) ||
          category.subField.includes(targetCategory)
        )
          return openToast("Error", "You entered duplicated category name.", "warning");
      }
    }

    try {
      switch (name) {
        case "addSubCategory":
          await setSubCategoryData(categoryData[mainID], targetCategory, uid);
          copyArray[mainID].subField.push(targetCategory);
          copyArray[mainID].thumbnailLink.push("");
          setCategoryData(copyArray);
          break;
        case "editMainCategory":
          await editMainCategoryData(
            categoryData.map((element, index) => (index === mainID ? targetCategory : element.mainField)),
            categoryData[mainID],
            targetCategory,
            uid
          );
          copyArray[mainID] = {
            ...copyArray[mainID],
            mainField: targetCategory,
          };
          setCategoryData(copyArray);
          break;
        case "deleteMainCategory":
          await deleteMainCategoryData(categoryData[mainID].mainField, uid);
          setCategoryData((prev) =>
            prev.filter((category) => {
              return category.mainField !== categoryData[mainID].mainField;
            })
          );
          break;
        default:
          return;
      }
    } catch (error) {
      console.log(error);
      openToast("Error", "Category edit failed.", "danger");
    } finally {
      if (categoryRef.current) categoryRef.current.value = "";
    }
  };

  const onCategoryModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonTarget = event.target as HTMLButtonElement;
    const targetId = buttonTarget.id.split(",").map((index) => Number(index)) ?? [];
    let modalTitle = "";
    let modalContent: string | JSX.Element;
    let isDelete = false;
    let callBack = () => {};

    switch (buttonTarget.name) {
      case "addSubCategory":
        modalTitle = "Add sub category";
        modalContent = inputForm(categoryRef);
        callBack = () => {
          setCategoryChange("addSubCategory", targetId[0]);
        };
        break;
      case "editMainCategory":
        modalTitle = "Edit category";
        modalContent = inputForm(categoryRef, categoryData[targetId[0]].mainField);
        callBack = () => {
          setCategoryChange("editMainCategory", targetId[0]);
        };
        break;
      case "deleteMainCategory":
        modalTitle = "Warning";
        modalContent = "If you really want to delete this category?";
        callBack = () => {
          setCategoryChange("deleteMainCategory", targetId[0]);
        };
        break;
      default:
        return;
    }
    openModal(modalTitle, modalContent, callBack, true, isDelete ? "danger" : "primary");
  };

  return (
    <div className="PostCategorySection col">
      {categoryData.map((data, id) => {
        return (
          <section className="pt-3 pb-4 bt-light" key={id}>
            <div className="hstack gap-1 mb-1">
              <h3 className="fw-semibold d-inline-block text-333">{data.mainField}</h3>
              <span className="text-info fs-5">({data.subField.length})</span>
              {isEdit ? (
                <>
                  <button
                    className="btn btn-outline-primary w-100px ms-auto"
                    id={`${id},1`}
                    name="addSubCategory"
                    onClick={onCategoryModal}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-outline-secondary w-100px "
                    id={`${id},2`}
                    name="editMainCategory"
                    onClick={onCategoryModal}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger w-100px "
                    id={`${id},3`}
                    name="deleteMainCategory"
                    onClick={onCategoryModal}
                  >
                    Delete
                  </button>
                </>
              ) : null}
            </div>
            <div className="container p-0 d-flex flex-wrap w-100">
              {data.subField.map((e, subID) => (
                <PostCategoryCard
                  key={subID}
                  isEdit={isEdit}
                  imgLink={data.thumbnailLink[subID]}
                  mainID={id}
                  subID={subID}
                  categoryData={categoryData}
                  setCategoryData={setCategoryData}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PostCategorySection;
