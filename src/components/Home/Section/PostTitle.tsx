import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../../states/LoginState";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { deletePost } from "../../../logic/getSetPostInfo";
import getDate from "../../../logic/getDate";
import { CenterAlign } from "../../../styles/PageView";

const PostTitleBackground = styled.div`
  height: 340px;
  background-color: #999;
`;

const PostTitleContainer = styled(CenterAlign)``;

const Category = styled.div`
  padding-top: 160px;
`;
const Title = styled.h2`
  color: white;
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const CreateData = styled.span`
  color: #eee;
`;

const EditData = styled.span`
  color: #eee;
  cursor: pointer;
`;

interface Props {
  postData?: PostDetail;
  nickname: string;
}

const PostTitle = ({ postData, nickname }: Props) => {
  const params = useParams();
  const [hidden, setHidden] = useState(true);
  const userData = useRecoilValue(loginData);
  const navigate = useNavigate();
  // category div자리에 넣기
  useEffect(() => {
    if (userData.uid && postData?.createdBy === userData.uid) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [userData.uid, postData?.createdBy]);

  const onEdit = () => {
    navigate("/edit", { state: { postInfo: postData } });
  };

  const onDelete = () => {
    if (!params.docID) throw window.alert("wrong url data");
    if (window.confirm("Do you really want delete This post?")) {
      deletePost(params.docID).then(() => {
        window.alert("Post has been deleted");
        navigate(-1);
      });
    }
  };

  return (
    <PostTitleBackground>
      <PostTitleContainer>
        <Category></Category>
        {postData?.title ? <Title>{postData?.title}</Title> : null}
        {nickname ? <CreateData>{`by ${nickname}`}</CreateData> : null}
        {postData?.createdAt ? (
          <CreateData>{` ∙  ${getDate(postData?.createdAt)}`}</CreateData>
        ) : null}
        <EditData hidden={hidden} onClick={onEdit}>
          {" "}
          ∙ 수정
        </EditData>
        <EditData hidden={hidden} onClick={onDelete}>
          {" "}
          ∙ 삭제
        </EditData>
      </PostTitleContainer>
    </PostTitleBackground>
  );
};

export default PostTitle;
