import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";

import { addPost, getPostData, updatePost } from "../logic/getSetPostInfo";
import { useModal } from "../states/ModalState";
import AlertModal from "../components/Share/AlertModal";
import OnWrite from "../components/Write/OnWrite";
import Preview from "../components/Write/Preview";

const Write = () => {
  // 객체 하나로 합치기
  const userData = useRecoilValue(loginData);
  const [title, setTitle] = useState("");
  const [postData, setPostData] = useState("**Write your post**");
  const [imgLink, setImgLink] = useState("");
  const [description, setDescription] = useState("");
  const [firstOpen, setFirstOpen] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
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
            console.log("test");
            navigate("/");
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async () => {
    try {
      let postID: string;
      if (params["*"]) {
        await updatePost(params["*"], title, postData, imgLink, description);
        postID = params["*"];
      } else {
        postID = await addPost(title, postData, userData, imgLink, description);
      }
      navigate(`/home/${userData.nickname}/${postID}`);
    } catch (error) {
      console.log(error);
      const errorTitle = "Post Submit failed";
      const errorText = "Something wrong, try again later.";
      openModal(errorTitle, errorText);
    }
  };

  const onPreview = () => {
    !firstOpen && setFirstOpen(true);
    const reg = /[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
    !description && setDescription(postData.replace(reg, "").substring(0, 150));
    setIsPreview((prev) => !prev);
  };

  return (
    <div className="Write">
      <AlertModal />
      <Preview
        firstOpen={firstOpen}
        isHidden={!isPreview}
        imageLink={imgLink}
        setImageLink={setImgLink}
        title={title}
        description={description}
        setDescription={setDescription}
        onPreview={onPreview}
        onSubmit={onSubmit}
      />
      <OnWrite
        isEdit={Boolean(params["*"])}
        title={title}
        setTitle={setTitle}
        postData={postData}
        setPostData={setPostData}
        onPreview={onPreview}
      />
    </div>
  );
};

export default Write;
