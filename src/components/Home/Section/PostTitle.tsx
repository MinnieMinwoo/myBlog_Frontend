import React from "react";
import styled from "styled-components";

import { CenterAlign } from "../../../styles/PageView";
import getDate from "../../../logic/getDate";

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

interface Props {
  title?: string;
  createdBy?: string;
  createdAt?: number;
}

const PostTitle = ({ title, createdBy, createdAt }: Props) => {
  // category div자리에 넣기
  return (
    <PostTitleBackground>
      <PostTitleContainer>
        <Category></Category>
        {title ? <Title>{title}</Title> : null}
        {createdBy ? <CreateData>{`by ${createdBy} `}</CreateData> : null}
        {createdAt ? <CreateData>{getDate(createdAt)}</CreateData> : null}
      </PostTitleContainer>
    </PostTitleBackground>
  );
};

export default PostTitle;
