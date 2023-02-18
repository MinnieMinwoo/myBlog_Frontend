import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import { Stack, Image, Placeholder } from "react-bootstrap";
import styled from "styled-components";

import getDate from "../../logic/getDate";

import { getUserPostList } from "../../logic/getSetPostInfo";
import { getUserUID } from "../../logic/getSetUserInfo";

const PostArticle = styled.article`
  padding: 0 30px;
  margin: 30px;
`;

const HeaderBox = styled.div`
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h2`
  font-weight: bold;
`;

const Number = styled.span.attrs(() => ({
  className: "text-primary",
}))`
  font-size: 18px;
`;

const PostBox = styled(Link)`
  padding: 30px 0;
  border-top: 1px solid #eee;
  display: flex;
  text-decoration-line: none;
`;

const Title = styled.h3`
  cursor: pointer;
  overflow: hidden;
  color: #111;
  font-weight: 600;
  ${PostBox}:hover & {
    text-decoration: underline;
  }
`;

const ImageBox = styled(Image).attrs(() => ({
  fluid: true,
  thumbnail: true,
}))`
  width: 100%;
  margin-bottom: 15px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center center;
`;

const TextData = styled.p`
  word-break: break-all;
  cursor: pointer;
  color: #555;
`;

const Date = styled.span`
  cursor: pointer;
  color: #999;
  font-size: 14px;
`;

const Dummy = () => {
  const repeat = 3;
  return (
    <>
      <Placeholder as={HeaderBox} animation="wave" size="lg">
        <Stack direction="horizontal" gap={1}>
          <Placeholder as={HeaderTitle} xs={1} bg="secondary" />
          <Placeholder as={Number} xs={1} bg="primary" />
        </Stack>
      </Placeholder>
      {[...Array(repeat)].map(() => (
        <Placeholder as={PostBox} animation="wave" size="lg">
          <Stack gap={1}>
            <Placeholder as={Title} bg="secondary" xs={3} />
            <div>
              <Placeholder as={TextData} bg="secondary" xs={12} />
              <Placeholder as={TextData} bg="secondary" xs={12} />
              <Placeholder as={TextData} bg="secondary" xs={8} />
            </div>
            <Placeholder as={Date} bg="secondary" xs={2} />
          </Stack>
        </Placeholder>
      ))}
    </>
  );
};

const PostContainer = () => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const [postList, setPostList] = useState<PostData[]>([]);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!params.userID) throw console.log("no name data");
    getUserUID(params.userID)
      .then((uid) => {
        return getUserPostList(uid);
      })
      .then((docList) => {
        setPostList(docList);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let title = "Posts";

  return (
    <PostArticle>
      {isLoading ? <Dummy /> : null}
      <HeaderBox className="PostHeader" hidden={isLoading}>
        <Stack direction="horizontal" gap={1}>
          <HeaderTitle>{title}</HeaderTitle>
          <Number>{`(${String(postList.length)})`}</Number>
        </Stack>
      </HeaderBox>
      <div className="PostItemList" hidden={isLoading}>
        <Stack>
          {postList.map((post) => (
            <PostBox className="PostItem" key={post.id} to={`/home/${params.userID}/${post.id}`}>
              <Stack gap={1}>
                {post.thumbnailImageURL !== "" ? (
                  <div>
                    <ImageBox fluid={true} src={post.thumbnailImageURL} alt="post" />
                  </div>
                ) : null}
                <Title>{post.title}</Title>
                <TextData>{post.thumbnailData}</TextData>
                <Date>{getDate(post.createdAt)}</Date>
              </Stack>
            </PostBox>
          ))}
        </Stack>
      </div>
    </PostArticle>
  );
};
export default PostContainer;
