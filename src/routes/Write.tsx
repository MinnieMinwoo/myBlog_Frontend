import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

import { addPost, getPostData, updatePost } from "../logic/getSetPostInfo";
import { useModal } from "../states/ModalState";
import AlertModal from "../components/Share/AlertModal";

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
  const userData = useRecoilValue(loginData);
  const [title, setTitle] = useState("");
  const [postData, setPostData] = useState("**Write your post**");
  const { openModal } = useModal();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params["*"]) {
      getPostData(params["*"])
        .then((post) => {
          if (post.createdBy !== userData.uid) {
            const userError = { name: "Permission Denied", code: "No_Permission" };
            throw userError;
          }
          setTitle(post.title);
          setPostData(post.detail);
        })
        .catch((error) => {
          console.log(error);
          const errorTitle = "Post Loading failed";
          let errorText;
          switch (error?.code) {
            case "No_PostData":
              errorText = "You entered wrong url link";
              break;
            case "No_Permission":
              errorText = "You don't have permission on this post.";
              break;
            default:
              errorText = "Something wrong, try again later.";
              break;
          }
          openModal(errorTitle, errorText, () => {
            navigate("/");
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let postID: string;
      if (params["*"]) {
        await updatePost(params["*"], title, postData);
        postID = params["*"];
      } else {
        postID = await addPost(title, postData, userData);
      }
      navigate(`/home/${userData.nickname}/${postID}`);
    } catch (error) {
      console.log(error);
      const errorTitle = "Post Submit failed";
      const errorText = "Something wrong, try again later.";
      openModal(errorTitle, errorText);
    }
  };

  return (
    <Container className="Write">
      <AlertModal />

      <header>
        <DocTitle>{params["*"] ? "Edit post" : "Write your Story"}</DocTitle>
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
          <Submit type="submit" value={params["*"] ? "Edit" : "Write up"} />
        </form>
      </section>
    </Container>
  );
};

export default Write;
