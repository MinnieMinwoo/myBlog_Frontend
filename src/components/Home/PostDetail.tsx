/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useToast } from "../../states/ToastState";
import { useModal } from "../../states/ModalState";
import { getAuth } from "firebase/auth";
import MarkdownPreview from "@uiw/react-markdown-preview";
import toc from "@jsdevtools/rehype-toc";

import getDate from "../../logic/getDate";
import { getPostData, deletePost, updateLikes } from "../../logic/getSetPostInfo";
import { isLoadingData } from "../../states/LoadingState";
import { deleteImg } from "../../logic/getSetImage";
import altImage from "../../assets/images/altThumbnail.jpg";

import "../../styles/PostDetail.css";

const Dummy = () => {
  const repeat = 5;
  return (
    <div aria-hidden="true">
      <div className="w-100 ps-4 h-340px bg-999">
        <div className="pb-1 pt-140px" />
        <div className="vstack placeholder-wave">
          <h2 className="placeholder placeholder-lg col-5 bg-light mb-3" />
          <div className="hstack gap-1">
            <span className="placeholder placeholder-lg col-1 bg-light" />
            <span className="placeholder placeholder-lg col-1 bg-light" />
          </div>
        </div>
      </div>
      <article className="py-3" />
      <div className="vstack gap-4">
        {[...Array(repeat)].map((e, index) => (
          <div key={index}>
            <div className="placeholder-wave">
              <h2 className="placeholder placeholder-lg col-6 mb-3" />
              <div className="vstack">
                <p className="placeholder col-10" />
                <p className="placeholder col-8" />
                <p className="placeholder col-12" />
                <p className="placeholder col-7" />
                <p className="placeholder col-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const PostDetail = () => {
  const userData = useRecoilValue(loginData);
  const [postData, setPostData] = useState<PostDetail>();
  const [hidden, setHidden] = useState(true);
  const [onLoading, setOnLoading] = useRecoilState(isLoadingData);
  const { openModal, closeModal } = useModal();
  const { openToast } = useToast();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setOnLoading(true);
    if (!params.docID) throw console.log("wrong url data");
    const docID = params.docID;
    getPostData(docID)
      .then((postDetail) => {
        setPostData(postDetail);
        const auth = getAuth();
        if (auth.currentUser?.uid && postDetail?.createdBy === auth.currentUser.uid) {
          setHidden(false);
        }
        setOnLoading(false);
      })
      .catch((error) => {
        console.log(error);
        openToast("Error", "Post loading failed", "warning");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = () => {
    navigate(`/write/${params.docID}`);
  };

  const onDelete = () => {
    openModal("Warning", "Do you really want delete This post?", onDeletePost, true, "danger");
  };

  const onDeletePost = async () => {
    if (!params.docID) throw window.alert("wrong url data");
    await deletePost(params.docID);
    postData?.thumbnailImageURL && deleteImg(postData.thumbnailImageURL);
    postData?.imageList &&
      postData.imageList.forEach((data) => {
        deleteImg(data);
      });
    closeModal();
    openModal(
      "Delete post complete",
      "Post has been deleted.",
      () => {
        navigate(`/home/${params.userID}`, { replace: false });
      },
      false
    );
  };

  const onLike = async () => {
    if (!postData) return;
    if (!userData.uid) navigate("/auth/");
    else {
      let newLikes = [...(postData?.likes ?? [])];
      if (newLikes.includes(userData.uid)) newLikes.splice(newLikes.indexOf(userData.uid), 1);
      else newLikes.push(userData.uid);
      try {
        await updateLikes(postData?.id, newLikes);
        setPostData((prev) => {
          if (!prev) return;
          else return { ...prev, likes: newLikes };
        });
      } catch (error) {
        console.log(error);
        openToast("Error", "Like action failed", "warning");
      }
    }
  };

  const onFacebook = (event: React.MouseEvent) => {
    event?.preventDefault();
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      "_blank",
      "width=800, height=600"
    );
  };

  const onTwitter = (event: React.MouseEvent) => {
    event?.preventDefault();
    window.open(
      `https://twitter.com/intent/tweet?text=${"Share our story"}&url=${window.location.href}`,
      "_blank",
      "width=800, height=600"
    );
  };

  const onCopy = async (event: React.MouseEvent) => {
    event?.preventDefault();
    await navigator.clipboard.writeText(window.location.href);
    openToast("Complete", "The link has been copied");
  };

  return (
    <>
      {onLoading ? <Dummy /> : null}
      <main className="read_section" hidden={onLoading}>
        <div className="w-100 h-340px">
          <div
            className="w-100 h-100 px-4 py-0 position-relative"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${
                !!postData?.thumbnailImageURL ? postData.thumbnailImageURL : altImage
              }) center/cover no-repeat`,
              color: "#eee",
            }}
          >
            <div className="pb-1 pt-140px">
              {postData?.category?.length ? (
                <span>{`${postData.category[0]} - ${postData.category[1]}`}</span>
              ) : null}
            </div>
            {postData?.title ? <h2 className="fs-1 fw-normal mb-2">{postData?.title}</h2> : null}
            {postData?.nickname ? <span>{`by ${postData.nickname}`}</span> : null}
            {postData?.createdAt ? <span>{` ∙  ${getDate(postData?.createdAt)}`}</span> : null}
            <span className="pe-on" hidden={hidden} onClick={onEdit}>
              ∙ Edit
            </span>
            <span className="pe-on" hidden={hidden} onClick={onDelete}>
              ∙ Delete
            </span>
          </div>
        </div>
        <article className="py-3" data-color-mode="light">
          <MarkdownPreview
            source={postData?.detail}
            rehypePlugins={[
              [
                toc,
                {
                  headings: ["h1", "h2", "h3"],
                  cssClasses: {
                    toc: "page-outline",
                    list: "page-list",
                    listItem: "page-listItem",
                    link: "page-link",
                  },
                },
              ],
            ]}
          />
        </article>
        <div>
          <div className="hstack mb-4">
            <button
              className={`btn btn${
                postData && userData?.uid && postData.likes.includes(userData.uid) ? "" : "-outline"
              }-primary w-100px h-50px me-3`}
              onClick={onLike}
            >
              ♡{`(${postData?.likes.length ?? 0})`}
            </button>
            <div className="dropdown-center">
              <button
                className="btn btn-outline-secondary dropdown-toggle w-100px h-50px"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Share
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href={`http://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    onClick={onFacebook}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href={`https://twitter.com/intent/tweet?text=${"Share our story"}&url=${
                      window.location.href
                    }`}
                    role="button"
                    onClick={onTwitter}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href={window.location.href}
                    role="button"
                    onClick={onCopy}
                  >
                    Copy link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostDetail;
