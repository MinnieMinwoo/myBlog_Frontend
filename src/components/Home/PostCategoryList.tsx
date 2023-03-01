import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Stack, Button } from "react-bootstrap";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryData } from "../../logic/getSetCategoryInfo";
import altImage from "../../assets/images/altThumbnail.jpg";

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
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

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

  return (
    <MainContainer className="PostCategoryList">
      <HeaderBox>
        <Stack direction="horizontal" gap={1}>
          <h2>{"Categories"}</h2>
          <span className="text-primary">({categoryData.length})</span>
          <Button className="ms-auto" onClick={onEdit}>
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
                      <Button variant="outline-primary" className="ms-auto">
                        Add
                      </Button>
                      <Button variant="outline-danger">Delete</Button>
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
                        <Stack direction="horizontal">
                          <Button variant="outline-secondary" hidden={!isEdit}>
                            ✎
                          </Button>
                          <Button variant="outline-warning" className="ms-auto" hidden={!isEdit}>
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
