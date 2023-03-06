import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { Stack, Button } from "react-bootstrap";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryData, setMainCategoryData } from "../../logic/getSetCategoryInfo";
import { useModal } from "../../states/ModalState";

import AlertModal from "../Share/AlertModal";
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
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const categoryRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const { openModal } = useModal();

  useEffect(() => {
    if (!params.userID) throw console.log("no params");
    getUserUID(params.userID).then((uid) => {
      getCategoryData(uid).then((data) => setCategoryData(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const setCategoryChange = async (name: string) => {
    const targetCategory = categoryRef.current?.value ?? "";
    const uid = userData.uid;

    // handle exception
    if (!uid || !targetCategory) return;
    for (const category of categoryData) {
      if (category.mainField === name) return;
    }

    try {
      await setMainCategoryData(targetCategory, uid);
      setCategoryData((prev) => [
        ...prev,
        {
          mainField: targetCategory,
          subField: [],
          thumbnailLink: [],
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const onCategoryModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const modalTitle = "Add category";
    const modalContent = inputForm(categoryRef);
    const callBack = () => {
      setCategoryChange("addMainCategory");
    };
    openModal(modalTitle, modalContent, callBack, true);
  };

  return (
    <MainContainer className="PostCategoryList">
      <AlertModal />
      <HeaderBox>
        <Stack direction="horizontal" gap={1}>
          <h2>{"Categories"}</h2>
          <span className="text-primary">({categoryData.length})</span>
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
        categoryData={categoryData}
        setCategoryData={setCategoryData}
      />
    </MainContainer>
  );
};

export default PostCategoryList;
