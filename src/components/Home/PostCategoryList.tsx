import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { Card, Col, Stack, Button, Form } from "react-bootstrap";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryData, setMainCategoryData } from "../../logic/getSetCategoryInfo";
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

  const onAddMainCategory = () => {
    openModal(
      "Add category",
      inputForm(),
      async () => {
        if (!categoryRef.current?.value || !userData.uid) return;
        const category = categoryRef.current?.value;
        await setMainCategoryData(category, userData.uid);
        setCategoryData((prev) => [
          ...prev,
          {
            mainField: category,
            subField: [],
            thumbnailLink: [],
          },
        ]);
        await getCategoryData(userData.uid);
      },
      true
    );
  };

  const onAddSubCategory = () => {
    openModal("Add category", inputForm(), () => {}, true);
  };

  const onEditMainCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target as HTMLButtonElement).id) return;
    const targetId = (event.target as HTMLButtonElement).id;
    const mainCategory = categoryData[Number(targetId[0])].mainField;
    openModal("Edit category", inputForm(mainCategory), () => {}, true);
  };

  const onEditSubCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target as HTMLButtonElement).id) return;
    const targetId = (event.target as HTMLButtonElement).id.split(",");
    const subCategory = categoryData[Number(targetId[0])].subField[Number(targetId[1])];
    openModal("Edit category", inputForm(subCategory), () => {}, true);
  };

  const onMainCategoryDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target as HTMLButtonElement).id) return;
    const targetId = (event.target as HTMLButtonElement).id;
    openModal("Warning", "If you really want to delete?", () => {}, true, "danger");
  };

  const onSubCategoryDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!(event.target as HTMLButtonElement).id) return;
    const targetId = (event.target as HTMLButtonElement).id;
    openModal("Warning", "If you really want to delete?", () => {}, true, "danger");
  };

  return (
    <MainContainer className="PostCategoryList">
      <AlertModal />
      <HeaderBox>
        <Stack direction="horizontal" gap={1}>
          <h2>{"Categories"}</h2>
          <span className="text-primary">({categoryData.length})</span>
          {isEdit ? (
            <Button className="ms-auto" variant="outline-primary" onClick={onAddMainCategory}>
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
                        variant="outline-primary"
                        className="ms-auto"
                        onClick={onAddSubCategory}
                      >
                        Add
                      </Button>
                      <Button
                        id={`${id},2`}
                        variant="outline-secondary"
                        onClick={onEditMainCategory}
                      >
                        Edit
                      </Button>
                      <Button id={`${id},3`} variant="danger" onClick={onMainCategoryDelete}>
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
                            variant="outline-secondary"
                            onClick={onEditSubCategory}
                          >
                            ✎
                          </Button>
                          <Button
                            id={`${id},${index},2`}
                            variant="outline-danger"
                            className="ms-auto"
                            onClick={onSubCategoryDelete}
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
