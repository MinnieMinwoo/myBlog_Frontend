import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useModal } from "../../states/ModalState";
import { Card, Stack, Button } from "react-bootstrap";
import styled from "styled-components";

import altImage from "../../assets/images/altThumbnail.jpg";
import {
  editSubCategoryData,
  deleteSubCategoryData,
  setCategoryThumbnailList,
  setCategoryThumbnail,
} from "../../logic/getSetCategoryInfo";
import { CategoryImageForm, CategoryNameForm as inputForm } from "./PostCategoryForm";
import { deleteImg } from "../../logic/getSetImage";

const CategoryContainer = styled(Card)`
  display: inline-block;
  margin: 10px;
  width: calc(100% - 20px);
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc(50% - 20px);
  }
  @media (min-width: 1200px) {
    width: calc(33% - 20px);
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
  }
`;

interface Props {
  isEdit: boolean;
  subData: string;
  imgLink: string;
  id: number;
  index: number;
  categoryData: CategoryData[];
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const PostCategoryCard = ({
  isEdit,
  subData,
  imgLink,
  id,
  index,
  categoryData,
  setCategoryData,
}: Props) => {
  const userData = useRecoilValue(loginData);
  const categoryRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef("");
  const { openModal } = useModal();

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = altImage;
  };

  const setCategoryChange = async (name: string, mainID: number = -1, subID: number = -1) => {
    const targetCategory = categoryRef.current?.value ?? "";
    const uid = userData.uid;
    let copyArray = [...categoryData];

    // handle exception
    if (!uid) return;
    if (mainID === -1) return;
    if (name.includes("edit") && name.includes("Sub")) {
      if (!targetCategory) return;
      for (const category of categoryData) {
        if (category.subField.includes(name)) return;
      }
    }

    try {
      switch (name) {
        case "editSubCategory":
          const editedSubCategory = await editSubCategoryData(
            categoryData[mainID],
            categoryData[mainID].subField[subID],
            targetCategory,
            uid
          );
          copyArray[mainID].subField = editedSubCategory;
          setCategoryData(copyArray);
          break;
        case "editCategoryImage":
          console.log(imageRef);
          copyArray[mainID].thumbnailLink[subID] = imageRef.current;
          await setCategoryThumbnailList(
            copyArray[mainID].thumbnailLink,
            copyArray[mainID].mainField,
            uid
          );
          setCategoryData(copyArray);
          break;
        case "deleteSubCategory":
          const deletedCategory = await deleteSubCategoryData(
            categoryData[mainID],
            categoryData[mainID].subField[subID],
            uid
          );
          copyArray[mainID] = deletedCategory;
          setCategoryData(copyArray);
          break;

        default:
          return;
      }
    } catch (error) {
      console.log(error);
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
      case "editSubCategory":
        modalTitle = "Edit sub category";
        modalContent = inputForm(categoryRef, categoryData[targetId[0]].subField[targetId[1]]);
        callBack = () => {
          setCategoryChange("editSubCategory", targetId[0], targetId[1]);
        };
        break;
      case "deleteSubCategory":
        modalTitle = "Warning";
        modalContent = "If you really want to delete this sub category?";
        callBack = () => {
          setCategoryChange("deleteSubCategory", targetId[0], targetId[1]);
        };
        isDelete = true;
        break;
      case "editCategoryImage":
        // Form 안에 넣으면, state쓰면 작동이 이상해지는 이유?
        imageRef.current = imgLink;
        const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
          if (!event.target.files) return;
          imageRef.current && deleteImg(imageRef.current);
          imageRef.current = await setCategoryThumbnail(event.target.files[0]);
          thumbnailRef.current && (thumbnailRef.current.src = imageRef.current);
        };
        const onDelete = () => {
          imageRef.current && deleteImg(imageRef.current);
          imageRef.current = "";
          thumbnailRef.current && (thumbnailRef.current.src = altImage);
        };
        modalTitle = "Thumbnail edit";
        modalContent = CategoryImageForm(imageRef, inputRef, thumbnailRef, onChange, onDelete);
        callBack = () => {
          setCategoryChange("editCategoryImage", targetId[0], targetId[1]);
        };
        break;
      default:
        return;
    }
    openModal(modalTitle, modalContent, callBack, true, isDelete ? "danger" : "primary");
  };

  return (
    <CategoryContainer key={index}>
      <Card.Img src={imgLink} onError={onError} alt="Thumbnail" />
      <Card.Body>
        <Card.Title>{`${subData}`}</Card.Title>
        <Stack direction="horizontal" hidden={!isEdit}>
          <Button
            id={`${id},${index},1`}
            name="editSubCategory"
            variant="outline-secondary"
            onClick={onCategoryModal}
          >
            ✎
          </Button>
          <Button
            id={`${id},${index},2`}
            name="editCategoryImage"
            variant="outline-info"
            className="ms-auto"
            onClick={onCategoryModal}
          >
            🖼️
          </Button>
          <Button
            id={`${id},${index},3`}
            name="deleteSubCategory"
            variant="outline-danger"
            className="ms-auto"
            onClick={onCategoryModal}
          >
            🗑️
          </Button>
        </Stack>
      </Card.Body>
    </CategoryContainer>
  );
};

export default PostCategoryCard;
