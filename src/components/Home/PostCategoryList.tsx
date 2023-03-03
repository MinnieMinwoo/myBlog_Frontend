import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { Card, Col, Stack, Button, Form } from "react-bootstrap";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import {
  deleteMainCategoryData,
  deleteSubCategoryData,
  getCategoryData,
  setMainCategoryData,
  setSubCategoryData,
} from "../../logic/getSetCategoryInfo";
import { useModal } from "../../states/ModalState";

import altImage from "../../assets/images/altThumbnail.jpg";
import AlertModal from "../Share/AlertModal";

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

const CategorySection = styled.section`
  padding: 30px 0;
  border-top: 1px solid #eee;
`;

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
  img {
    width: 100%;
    aspect-ratio: 16/9;
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

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = altImage;
  };

  const inputForm = (defaultValue = "") => {
    return (
      <Form>
        <Form.Label>Write down the category name.</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter category name"
          defaultValue={defaultValue}
          ref={categoryRef}
          required
        />
      </Form>
    );
  };

  const setCategoryChange = async (name: string, mainID: number = -1, subID: number = -1) => {
    const targetCategory = categoryRef.current?.value ?? "";
    const uid = userData.uid;
    let copyArray = [...categoryData];

    // handle exception
    if (!uid || (!name.includes("Main") && !name.includes("Sub"))) return;
    if (name.includes("add") || name.includes("edit")) {
      if (!targetCategory) return;
      if (name.includes("sub") && mainID === -1) return;
      for (const category of categoryData) {
        if (name.includes("Main") && category.mainField === name) return;
        else if (category.subField.includes(name)) return;
      }
    } else if (name.includes("delete")) {
      if (mainID === -1) return;
      else if (name.includes("Sub") && subID === -1) return;
    }

    try {
      switch (name) {
        case "addMainCategory":
          await setMainCategoryData(targetCategory, uid);
          setCategoryData((prev) => [
            ...prev,
            {
              mainField: targetCategory,
              subField: [],
              thumbnailLink: [],
            },
          ]);
          break;
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
          break;
        case "editSubCategory":
          break;
        case "deleteMainCategory":
          await deleteMainCategoryData(categoryData[mainID].mainField, uid);
          setCategoryData((prev) =>
            prev.filter((category) => {
              return category.mainField !== categoryData[mainID].mainField;
            })
          );
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
      case "addMainCategory":
        modalTitle = "Add category";
        modalContent = inputForm();
        callBack = () => {
          setCategoryChange("addMainCategory");
        };
        break;
      case "addSubCategory":
        modalTitle = "Add sub category";
        modalContent = inputForm();
        callBack = () => {
          setCategoryChange("addSubCategory", targetId[0]);
        };
        break;
      case "editMainCategory":
        modalTitle = "Edit category";
        modalContent = inputForm();
        break;
      case "editSubCategory":
        modalTitle = "Edit sub category";
        modalContent = inputForm();
        break;
      case "deleteMainCategory":
        modalTitle = "Warning";
        modalContent = "If you really want to delete this category?";
        callBack = () => {
          setCategoryChange("deleteMainCategory", targetId[0]);
        };
        isDelete = true;
        break;
      case "deleteSubCategory":
        modalTitle = "Warning";
        modalContent = "If you really want to delete this sub category?";
        callBack = () => {
          setCategoryChange("deleteSubCategory", targetId[0], targetId[1]);
        };
        isDelete = true;
        break;
      default:
        return;
    }
    openModal(modalTitle, modalContent, callBack, true, isDelete ? "danger" : "primary");
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
              <>
                {data.subField.map((subData, index) => {
                  return (
                    <CategoryContainer key={index}>
                      <Card.Img src={data.thumbnailLink[index]} onError={onError} alt="Thumbnail" />
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
                })}
              </>
            </CategorySection>
          );
        })}
      </Col>
    </MainContainer>
  );
};

export default PostCategoryList;
