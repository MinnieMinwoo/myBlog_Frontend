/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import MarkdownPreview from "@uiw/react-markdown-preview";
import styled from "styled-components";

import getDate from "../../logic/getDate";
import { getPostData, deletePost } from "../../logic/getSetPostInfo";

const PostTitleBackground = styled.div`
  height: 340px;
`;

const Category = styled.div`
  padding-top: 160px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const EditData = styled.span`
  cursor: pointer;
`;

const PostBox = styled.article`
  padding: 30px 0;
  flex-basis: 80vw;
  @media (min-width: 1080px) {
    padding: 72px 50px 60px 0;
    flex-grow: 3;
  }
`;

const PostDetail = () => {
  const [postData, setPostData] = useState<PostDetail>();
  const [hidden, setHidden] = useState(true);
  const userData = useRecoilValue(loginData);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params.docID) throw console.log("wrong url data");
    const docID = params.docID;
    getPostData(docID).then((postDetail) => {
      setPostData(postDetail);
    });
    if (userData.uid && postData?.createdBy === userData.uid) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [postData?.createdBy]);

  const onEdit = () => {
    navigate(`/write/${params.docID}`);
  };

  const onDelete = () => {
    if (!params.docID) throw window.alert("wrong url data");
    if (window.confirm("Do you really want delete This post?")) {
      deletePost(params.docID).then(() => {
        window.alert("Post has been deleted");
        navigate(`/home/${params.userID}`, { replace: false });
      });
    }
  };

  return (
    <section className="read_section">
      <PostTitleBackground>
        <Category />
        {postData?.title ? <Title>{postData?.title}</Title> : null}
        {postData?.nickname ? <span>{`by ${postData.nickname}`}</span> : null}
        {postData?.createdAt ? (
          <span>{` ∙  ${getDate(postData?.createdAt)}`}</span>
        ) : null}
        <EditData hidden={hidden} onClick={onEdit}>
          ∙ Edit
        </EditData>
        <EditData hidden={hidden} onClick={onDelete}>
          ∙ Delete
        </EditData>
      </PostTitleBackground>
      <PostBox data-color-mode="light">
        <MarkdownPreview source={postData?.detail} />
      </PostBox>
    </section>
  );
};

export default PostDetail;
