import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

import { addPost } from "../logic/getSetPostInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1080px) {
    width: 80%;
    margin-left: 10%;
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

const Write = () => {
  const [title, setTitle] = useState("");
  const [postData, setPostData] = useState("**Write your post**");
  const navigate = useNavigate();
  const userData = useRecoilValue(loginData);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addPost(title, postData, userData);
    navigate(`/home/${userData.nickname}`);
  };

  return (
    <Container className="Write">
      <header>
        <DocTitle>Write your Story</DocTitle>
      </header>
      <section>
        <form onSubmit={onSubmit}>
          <PostTitle
            type="text"
            placeholder="Write post title"
            value={title}
            maxLength={30}
            onChange={onTitleChange}
            required
          />
          <Editor
            data-color-mode="light"
            value={postData}
            onChange={(value = "") => {
              setPostData(value);
            }}
          />
          <Submit type="submit" value="Write up" />
        </form>
      </section>
    </Container>
  );
};

export default Write;
