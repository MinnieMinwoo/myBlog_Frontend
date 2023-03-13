import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";
import styled from "styled-components";
import { Col, Stack, Button } from "react-bootstrap";

import {
  setSubCategoryData,
  editMainCategoryData,
  deleteMainCategoryData,
} from "../../logic/getSetCategoryInfo";
import PostCategoryCard from "./PostCategoryCard";
import { CategoryNameForm as inputForm } from "./PostCategoryForm";

const CategorySection = styled.section`
  padding: 30px 0;
  border-top: 1px solid #eee;
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

interface Props {
  isEdit: boolean;
  categoryData: CategoryData[];
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const PostSubCategory = ({ isEdit, categoryData, setCategoryData }: Props) => {
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
          const changedCategory = await setSubCategoryData(
            categoryData[mainID],
            targetCategory,
            uid
          );
          copyArray[mainID] = changedCategory;
          setCategoryData(copyArray);
          break;
        case "editMainCategory":
          const editedCategoryData = await editMainCategoryData(
            categoryData.map((element, index) =>
              index === mainID ? targetCategory : element.mainField
            ),
            categoryData[mainID],
            targetCategory,
            uid
          );
          copyArray[mainID] = editedCategoryData;
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
    <Col sm>
      {categoryData.map((data, id) => {
        return (
          <CategorySection key={id}>
            <HeaderBox>
              <Stack direction="horizontal" gap={1}>
                <h3>{data.mainField}</h3>
                <span className="text-secondary">({data.subField.length})</span>
                {isEdit ? (
                  <>
                    <Button
                      id={`${id},1`}
                      name="addSubCategory"
                      variant="outline-primary"
                      className="ms-auto"
                      onClick={onCategoryModal}
                    >
                      Add
                    </Button>
                    <Button
                      id={`${id},2`}
                      name="editMainCategory"
                      variant="outline-secondary"
                      onClick={onCategoryModal}
                    >
                      Edit
                    </Button>
                    <Button
                      id={`${id},3`}
                      name="deleteMainCategory"
                      variant="danger"
                      onClick={onCategoryModal}
                    >
                      Delete
                    </Button>
                  </>
                ) : null}
              </Stack>
            </HeaderBox>
            {data.subField.map((subData, index) => (
              <PostCategoryCard
                key={index}
                isEdit={isEdit}
                subData={subData}
                imgLink={data.thumbnailLink[index]}
                id={id}
                index={index}
                categoryData={categoryData}
                setCategoryData={setCategoryData}
              />
            ))}
          </CategorySection>
        );
      })}
    </Col>
  );
};

export default PostSubCategory;
