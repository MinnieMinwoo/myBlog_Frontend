import React, { ChangeEvent, DragEvent, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { uuidv4 } from "@firebase/util";
import MDEditor from "@uiw/react-md-editor";
import { Button, Container, Navbar, Col } from "react-bootstrap";
import styled from "styled-components";

import { uploadImg } from "../../logic/getSetImage";
import blogIcon from "../../assets/images/logo.png";
import { useToast } from "../../states/ToastState";

const OnDragCheck = styled.div`
  &.Drag {
    opacity: 0.3;
  }
`;

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
  const inputRef = useRef<HTMLDivElement>(null);
  const userData = useRecoilValue(loginData);
  const [isDragging, setIsDragging] = useState(false);
  const { openToast } = useToast();
  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPostContent((prev) => ({
      ...prev,
      title: value,
    }));
  };

  // drag & drop image
  const onDragEnter = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };
  const onDragLeave = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      setIsDragging(true);
    }
  };
  const onDrop = async (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const textarea = inputRef.current?.children[0]?.children[1]?.children[0]?.children[0]
      ?.children[1] as HTMLTextAreaElement; // Type definition error when use ref on editor directly
    if (!textarea) return;
    const files = event.dataTransfer.files[0];
    if (!files) return;
    try {
      const imageLink = await uploadImg(files, `$images/${userData.uid}/${uuidv4()}`);
      const currentText = postContent.postData;
      const textCursor = textarea.selectionStart;
      setPostContent((prev) => ({
        ...prev,
        postData: `${currentText.slice(0, textCursor)}![](${imageLink})${currentText.slice(
          textCursor
        )}`,
        imageList: [...prev.imageList, imageLink],
      }));
    } catch (error) {
      console.log(error);
      openToast("Error", "Image upload failed.", "danger");
    } finally {
      setIsDragging(false);
    }
  };

  return (
    <OnDragCheck className={isDragging ? "OnWrite Drag" : "OnWrite"}>
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
        <section
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <input hidden type="file" accept="image/*" />
          <PostTitle
            placeholder="Write post title"
            value={postContent.title}
            maxLength={30}
            onChange={onTitleChange}
            required
          />
          <div ref={inputRef}>
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
          </div>
          <Submit onClick={onPreview}>{isEdit ? "Edit" : "Write up"}</Submit>
        </section>
      </WriteContainer>
    </OnDragCheck>
  );
};

export default OnWrite;
