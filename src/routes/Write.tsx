import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { isLoadingData } from "../states/LoadingState";
import { loginData } from "../states/LoginState";
import { useModal } from "../states/ModalState";
import { getAuth } from "firebase/auth";

import { setPost, getPostData, updatePost } from "../logic/getSetPostInfo";
import { useOnPreventLeave } from "../logic/useOnPreventLeave";

import AlertModal from "../components/Share/AlertModal";
import OnWrite from "../components/Write/OnWrite";
import Preview from "../components/Write/Preview";
import Loading from "../components/Share/Loading";
import AlertToast from "../components/Share/AlertToast";

const Write = () => {
  const [loading, setLoading] = useRecoilState(isLoadingData);
  const userData = useRecoilValue(loginData);
  const [postContent, setPostContent] = useState<postEditData>({
    title: "",
    category: [],
    postData: "**Write your post**",
    thumbnailImgLink: "",
    thumbnailData: "",
    imageList: [],
  });
  const [isPreview, setIsPreview] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();
  const params = useParams();

  useOnPreventLeave();
  useEffect(() => {
    if (params["*"]) {
      setLoading(true);
      getPostData(params["*"] as string)
        .then((post) => {
          const auth = getAuth();
          if (post.createdBy !== auth.currentUser?.uid) {
            const userError = {
              name: "Permission Denied",
              code: "No_Permission",
            };
            throw userError;
          }
          setPostContent((prev) => ({
            ...prev,
            title: post.title,
            category: post.category ?? [],
            postData: post.detail,
            thumbnailImgLink: post.thumbnailImageURL,
            thumbnailData: post.thumbnailData,
            imageList: post.imageList,
          }));
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
        })
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async () => {
    try {
      let postID: string;
      if (params["*"]) {
        await updatePost(params["*"], postContent);
        postID = params["*"];
      } else {
        postID = await setPost(postContent, userData);
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
    const reg = /[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
    !postContent.thumbnailData &&
      setPostContent((prev) => ({
        ...prev,
        thumbnailData: postContent.postData.replace(reg, "").substring(0, 150),
      }));
    setIsPreview((prev) => !prev);
  };

  return (
    <div className="Write">
      {loading ? <Loading /> : null}
      <AlertModal />
      <AlertToast />
      <Preview
        isEdit={Boolean(params["*"])}
        isPreview={isPreview}
        postContent={postContent}
        setPostContent={setPostContent}
        onPreview={onPreview}
        onSubmit={onSubmit}
      />
      <OnWrite
        isEdit={Boolean(params["*"])}
        postContent={postContent}
        setPostContent={setPostContent}
        onPreview={onPreview}
      />
    </div>
  );
};

export default Write;
