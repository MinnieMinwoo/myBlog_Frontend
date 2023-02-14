import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Stack } from "react-bootstrap";
import styled from "styled-components";

import getDate from "../../logic/getDate";

import { getUserPostList } from "../../logic/getSetPostInfo";
import { getUserUID } from "../../logic/getSetUserInfo";

const PostArticle = styled.article`
  padding: 0 30px;
  margin: 30px;
`;

const HeaderBox = styled.div`
  margin-bottom: 28px;
  padding-bottom: 18px;
  border-bottom: 1px solid #eee;
`;

const HeaderTitle = styled.span`
  font-weight: bold;
  color: #555;
`;

const Number = styled.span`
  margin-left: 7px;
  font-style: normal;
  color: #04beb8;
`;

const PostBox = styled(Link)`
  display: flex;
  text-decoration-line: none;
`;

const Title = styled.h3`
  cursor: pointer;
  overflow: hidden;
  font-size: 18px;
  color: #555;
  ${PostBox}:hover & {
    text-decoration: underline;
  }
`;

const TextData = styled.p`
  word-break: break-all;
  cursor: pointer;
  color: #999;
  font-size: 14px;
`;

const Date = styled.span`
  cursor: pointer;
  color: #999;
  font-size: 12px;
`;

const PostContainer = () => {
  const [postList, setPostList] = useState<PostData[]>([]);
  const params = useParams();

  useEffect(() => {
    if (!params.userID) throw console.log("no name data");
    getUserUID(params.userID)
      .then((uid) => {
        return getUserPostList(uid);
      })
      .then((docList) => {
        setPostList(docList);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let title = "Posts";

  return (
    <PostArticle className="PostContainer">
      <HeaderBox className="PostHeader">
        <Stack direction="horizontal">
          <HeaderTitle>{title}</HeaderTitle>
          <Number>{String(postList.length)}</Number>
        </Stack>
      </HeaderBox>
      <div className="PostItemList">
        <Stack gap={3}>
          {postList.map((post) => (
            <PostBox className="PostItem" key={post.id} to={`/home/${params.userID}/${post.id}`}>
              <Stack gap={1}>
                <Title>{post.title}</Title>
                <TextData>{post.thumbnailData}</TextData>
                <Date>{getDate(post.createdAt)}</Date>
              </Stack>
              {post.thumbnailImageURL !== "" ? (
                <div>
                  <img src={post.thumbnailImageURL} alt="post" />
                </div>
              ) : null}
            </PostBox>
          ))}
        </Stack>
      </div>
    </PostArticle>
  );
};
export default PostContainer;
