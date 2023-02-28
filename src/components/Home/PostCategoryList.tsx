import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Stack } from "react-bootstrap";
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
  const params = useParams();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const categoryNum = useMemo(() => {
    let returnValue = 0;
    categoryData.map((data) => {
      returnValue += data.subfield.length;
    });
    return returnValue;
  }, [categoryData]);

  useEffect(() => {
    if (!params.userID) throw console.log("no params");
    getUserUID(params.userID).then((uid) => {
      getCategoryData(uid).then((data) => setCategoryData(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = altImage;
  };

  return (
    <MainContainer className="PostCategoryList">
      <HeaderBox>
        <Stack direction="horizontal" gap={1}>
          <h2>{"Categories"}</h2>
          <span className="text-primary">({categoryData.length})</span>
        </Stack>
      </HeaderBox>
      <Col sm>
        {categoryData.map((data, id) => {
          return (
            <CategorySection>
              <HeaderBox>
                <Stack direction="horizontal" gap={1}>
                  <h3>{data.mainfield}</h3>
                  <span className="text-secondary">({data.subfield.length})</span>
                </Stack>
              </HeaderBox>
              <>
                {data.subfield.map((subData, index) => {
                  return (
                    <CategoryContainer key={index}>
                      <Card.Img
                        src={data.subThumbnailLink[index]}
                        onError={onError}
                        alt="Thumbnail"
                      />
                      <Card.Body>
                        <Card.Title>{`${subData}`}</Card.Title>
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
