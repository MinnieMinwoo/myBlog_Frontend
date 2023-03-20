import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";
import { Stack, Button } from "react-bootstrap";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryList, setMainCategoryData } from "../../logic/getSetCategoryInfo";

import AlertModal from "../Share/AlertModal";
import AlertToast from "../Share/Toast";
import PostSubCategory from "./PostSubCategory";
import { CategoryNameForm as inputForm } from "./PostCategoryForm";

const MainContainer = styled(Stack)`
  padding: 0 30px;
  margin: 30px;
`;

const HeaderBox = styled.div`
  margin-bottom: 20px;

  h2 {
    font-weight: bold;
    display: inline-block;
  }

  h3 {
    color: #333;
    font-weight: 600;
    display: inline-block;
  }

  span {
    font-size: 18px;
  }

  button {
    width: 100px;
  }
`;

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
    <MainContainer className="PostCategoryList">
      <AlertModal />
      <AlertToast />
      <HeaderBox>
        <Stack direction="horizontal" gap={1}>
          <h2>{"Categories"}</h2>
          <span className="text-primary">({categoryList.length})</span>
          {isEdit ? (
            <Button
              name="addMainCategory"
              className="ms-auto"
              variant="outline-primary"
              onClick={onCategoryModal}
            >
              Add
            </Button>
          ) : null}
          <Button className={isEdit ? "" : "ms-auto"} onClick={onEdit}>
            {isEdit ? "Complete" : "Edit"}
          </Button>
        </Stack>
      </HeaderBox>
      <PostSubCategory
        isEdit={isEdit}
        categoryData={categoryList}
        setCategoryData={setCategoryList}
      />
    </MainContainer>
  );
};

export default PostCategoryList;
