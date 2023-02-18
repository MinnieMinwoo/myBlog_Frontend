import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { Button, Container, Navbar, Col } from "react-bootstrap";
import styled from "styled-components";

import blogIcon from "../../assets/images/logo.png";

const WriteContainer = styled(Col)`
  margin-top: 20px;
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

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const PostTitle = styled.input`
  width: 100%;
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

const Submit = styled(Button)`
  margin: 0;
  margin-top: 20px;
  float: right;
`;

const Editor = styled(MDEditor)`
  height: calc(100vh - 260px) !important;
`;

interface Props {
  isEdit: boolean;
  postContent: postEditData;
  setPostContent: React.Dispatch<React.SetStateAction<postEditData>>;
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
    <>
      <header>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Logo src={blogIcon} alt="blog logo" />
              </Link>
              {isEdit ? "Edit post" : "Write your Story"}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <WriteContainer
        sm={{ span: 10, offset: 1 }}
        lg={{ span: 8, offset: 2 }}
        xxl={{ span: 6, offset: 3 }}
        className="OnWrite"
      >
        <section>
          <PostTitle
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
          <Submit onClick={onPreview}>{isEdit ? "Edit" : "Write up"}</Submit>
        </section>
      </WriteContainer>
    </>
  );
};

export default OnWrite;
