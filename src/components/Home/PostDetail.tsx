import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useToast } from "../../states/ToastState";
import { useModal } from "../../states/ModalState";
import { getAuth } from "firebase/auth";
import MarkdownPreview from "@uiw/react-markdown-preview";
import toc from "@jsdevtools/rehype-toc";
import { Stack, Placeholder } from "react-bootstrap";
import styled from "styled-components";

import getDate from "../../logic/getDate";
import { getPostData, deletePost } from "../../logic/getSetPostInfo";
import { isLoadingData } from "../../states/LoadingState";
import { deleteImg } from "../../logic/getSetImage";
import AlertToast from "../Share/Toast";
import AlertModal from "../Share/AlertModal";

const PostTitleBackground = styled.section<{ imageLink: string }>`
  height: 340px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imageLink});
  background-color: rgba(255, 255, 255, 0.5);
  color: #eee;
`;

const Category = styled.div`
  padding-top: 140px;
  padding-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const EditData = styled.span`
  cursor: pointer;
`;

const PostBox = styled.article`
  padding: 30px 0;
`;

const MDPreview = styled(MarkdownPreview)`
  .page-outline {
    display: inline-block;
    position: fixed;
    left: 75%;
    top: 150px;
    margin-left: 20px;
    min-height: 200px;
    max-height: calc(100% - 300px);
    border-left: 1px solid #eee;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: #aaa;
    }
    @media (max-width: 1399px) {
      visibility: hidden;
    }
  }
  .page-list {
    list-style: none;
    padding-left: 20px;
  }
  .page-listItem > a {
    font-size: 13px;
    color: #777;
  }
  .page-listItem > a:hover {
    color: #333;
    text-decoration-line: none;
  }
`;

const Dummy = () => {
  const repeat = 5;
  return (
    <>
      <PostTitleBackground imageLink="">
        <Placeholder animation="wave">
          <Category />
          <Stack>
            <Placeholder as={Title} xs={5} bg="light" />
            <Stack direction="horizontal" gap={1}>
              <Placeholder as="span" xs={1} bg="light" />
              <Placeholder as="span" xs={1} bg="light" />
            </Stack>
          </Stack>
        </Placeholder>
      </PostTitleBackground>
      <PostBox />
      <Placeholder animation="wave">
        <Stack gap={4}>
          {[...Array(repeat)].map((e, index) => (
            <div key={index}>
              <Placeholder as="h1" xs={6} size="lg" />
              <Stack>
                <Placeholder as="p" xs={10} />
                <Placeholder as="p" xs={8} />
                <Placeholder as="p" xs={12} />
                <Placeholder as="p" xs={7} />
                <Placeholder as="p" xs={5} />
              </Stack>
            </div>
          ))}
        </Stack>
      </Placeholder>
    </>
  );
};
const PostDetail = () => {
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

  const deleteModal = () => {
    openModal("Warning", "Do you really want delete This post?", onDelete, true, "danger");
  };

  const onDelete = async () => {
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

  return (
    <>
      {onLoading ? <Dummy /> : null}
      <AlertModal />
      <AlertToast />
      <main className="read_section" hidden={onLoading}>
        <PostTitleBackground imageLink={postData?.thumbnailImageURL ?? ""}>
          <Category>
            {postData?.category?.length ? (
              <span>{`${postData.category[0]} - ${postData.category[1]}`}</span>
            ) : null}
          </Category>
          {postData?.title ? <Title>{postData?.title}</Title> : null}
          {postData?.nickname ? <span>{`by ${postData.nickname}`}</span> : null}
          {postData?.createdAt ? <span>{` ???  ${getDate(postData?.createdAt)}`}</span> : null}
          <EditData hidden={hidden} onClick={onEdit}>
            ??? Edit
          </EditData>
          <EditData hidden={hidden} onClick={deleteModal}>
            ??? Delete
          </EditData>
        </PostTitleBackground>
        <PostBox data-color-mode="light">
          <MDPreview
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
        </PostBox>
      </main>
    </>
  );
};

export default PostDetail;
