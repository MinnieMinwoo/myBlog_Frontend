import React, { ChangeEvent } from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }

  animation-name: init;
  animation-duration: 1s;
  animation-duration: linear;
  @keyframes init {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DocTitle = styled.h1`
  border-bottom: 1px solid #eee;
  padding-bottom: 22px;
  color: #333;
`;

const PostTitle = styled.input`
  color: #777;
  border: 0;
  border-bottom: 1px solid #eee;
  &:focus {
    outline: none;
    border-bottom: 2px solid #777;
  }
  font-size: 36px;
  margin-bottom: 20px;
`;

const Submit = styled.input`
  width: 88px;
  margin: 0;
  margin-top: 20px;
  line-height: 38px;
  border-radius: 20px;
  float: right;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  cursor: pointer;
`;

const Editor = styled(MDEditor)`
  height: calc(100vh - 260px) !important;
`;

interface postContent {
  title: string;
  postData: string;
  imgLink: string;
  thumbnailData: string;
}
interface Props {
  isEdit: boolean;
  postContent: postContent;
  setPostContent: React.Dispatch<React.SetStateAction<postContent>>;
  onPreview: () => void;
}

const OnWrite = ({ isEdit, postContent, setPostContent, onPreview }: Props) => {
  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPostContent((prev) => ({
      ...prev,
      title: value,
    }));
  };

  return (
    <Container className="OnWrite">
      <header>
        <DocTitle>{isEdit ? "Edit post" : "Write your Story"}</DocTitle>
      </header>
      <section>
        <form onSubmit={onPreview}>
          <PostTitle
            type="text"
            placeholder="Write post title"
            value={postContent.title}
            maxLength={30}
            onChange={onTitleChange}
            required
          />
          <Editor
            data-color-mode="light"
            value={postContent.postData}
            onChange={(value = "") => {
              setPostContent((prev) => ({
                ...prev,
                postData: value,
              }));
            }}
          />
          <Submit type="submit" value={isEdit ? "Edit" : "Write up"} />
        </form>
      </section>
    </Container>
  );
};

export default OnWrite;
