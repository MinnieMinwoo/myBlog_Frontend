import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryList, setMainCategoryData } from "../../logic/getSetCategoryInfo";

import PostCategorySection from "./PostCategorySection";
import { CategoryNameForm as inputForm } from "./PostCategoryForm";

const PostCategoryList = () => {
  const userData = useRecoilValue(loginData);
  const [isEdit, setIsEdit] = useState(false);
  type CategoryState = [CategoryData[], React.Dispatch<React.SetStateAction<CategoryData[]>>];
  const [categoryList, setCategoryList] = useOutletContext<CategoryState>();
  const categoryRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const { openModal } = useModal();
  const { openToast } = useToast();

  useEffect(() => {
    if (!params.userID) throw console.log("no params");
    getUserUID(params.userID)
      .then((uid) => {
        getCategoryList(uid).then((data) => setCategoryList(data));
      })
      .catch(() => {
        openToast("Warning", "Category loading failed", "warning");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const setCategoryChange = async () => {
    const targetCategory = categoryRef.current?.value ?? "";
    const uid = userData.uid;

    // handle exception
    if (!uid || !targetCategory) return openToast("Error", "Using corrupt data.", "danger");
    for (const category of categoryList) {
      if (category.mainField === targetCategory)
        return openToast("Error", "You entered duplicated category name.", "warning");
    }

    try {
      await setMainCategoryData(targetCategory, uid);
      setCategoryList((prev) => [
        ...prev,
        {
          mainField: targetCategory,
          subField: [],
          thumbnailLink: [],
        },
      ]);
    } catch (error) {
      console.log(error);
      openToast("Error", "Category add failed.", "danger");
    }
  };

  const onCategoryModal = () => {
    const modalTitle = "Add category";
    const modalContent = inputForm(categoryRef);
    const callBack = () => {
      setCategoryChange();
    };
    openModal(modalTitle, modalContent, callBack, true);
  };

  return (
    <div className="PostCategoryList my-4 mx-md-4 px-md-4">
      <div className="mb-3">
        <div className="hstack gap-1">
          <h2 className="fw-bold d-inline-block">{"Categories"}</h2>
          <span className="text-primary fs-5">({categoryList.length})</span>
          {isEdit ? (
            <button
              className="btn btn-outline-primary ms-auto w-100px"
              name="addMainCategory"
              onClick={onCategoryModal}
            >
              Add
            </button>
          ) : null}
          <button className={`btn btn-primary ${isEdit ? null : "ms-auto"}`} onClick={onEdit}>
            {isEdit ? "Complete" : "Edit"}
          </button>
        </div>
      </div>
      <PostCategorySection
        isEdit={isEdit}
        categoryData={categoryList}
        setCategoryData={setCategoryList}
      />
    </div>
  );
};

export default PostCategoryList;
