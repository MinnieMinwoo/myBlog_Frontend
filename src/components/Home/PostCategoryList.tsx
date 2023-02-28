import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Stack } from "react-bootstrap";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryData } from "../../logic/getSetCategoryInfo";
import altImage from "../../assets/images/altThumbnail.jpg";

const CategoryContainer = styled(Card)`
  display: inline-block;
  margin: 10px;
  width: calc(100% - 20px);
  @media screen and (min-width: 768px) and (max-width: 1399px) {
    width: calc(50% - 20px);
  }
  @media (min-width: 1400px) {
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
    <div className="PostCategoryList">
      <Stack direction="horizontal" gap={1}>
        <h2>{"title"}</h2>
        <span>{0}</span>
      </Stack>
      <Col sm>
        {categoryData.map((data, id) => {
          console.log(data);
          return (
            <>
              <CategoryContainer key={id}>
                <Card.Img src={data.thumbnailLink} onError={onError} alt="Thumbnail" />
                <Card.Body>
                  <Card.Title>{data.mainfield}</Card.Title>
                </Card.Body>
              </CategoryContainer>
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
                        <Card.Title>{`${data.mainfield} - ${subData}`}</Card.Title>
                      </Card.Body>
                    </CategoryContainer>
                  );
                })}
              </>
            </>
          );
        })}
      </Col>
    </div>
  );
};

export default PostCategoryList;
