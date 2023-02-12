import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "./PostItem";
import styled from "styled-components";

import { getUserPostList } from "../../logic/getSetPostInfo";
import { getUserUID } from "../../logic/getSetUserInfo";

const PostArticle = styled.article`
  padding: 30px 0;
`;

const HeaderBox = styled.div`
  margin-bottom: 28px;
  padding-bottom: 18px;
  border-bottom: 1px solid #eee;
`;

const Container = styled.h2`
  font-size: 17px;
  line-height: 1.375;
  border: 0;
  margin: 0;
`;

const Title = styled.span`
  font-weight: bold;
  color: #555;
`;

const Number = styled.span`
  margin-left: 7px;
  font-style: normal;
  color: #04beb8;
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
  }, []);

  let title = "Posts";

  return (
    <PostArticle className="PostContainer">
      <HeaderBox className="PostHeader">
        <Container>
          <Title>{title}</Title>
          <Number>{String(postList.length)}</Number>
        </Container>
      </HeaderBox>
      <div className="PostItemList">
        {postList.map((post) => (
          <PostItem key={post.createdAt} postItem={post} />
        ))}
      </div>
    </PostArticle>
  );
};
export default PostContainer;
