/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoadingData } from "../../states/LoadingState";

import { getUserPostNumber, getUserPostList } from "../../logic/getSetPostInfo";
import { getUserUID } from "../../logic/getSetUserInfo";
import { useToast } from "../../states/ToastState";
import PostThumbnailBox from "./PostThumbnailBox";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import MetaTag from "../Share/MetaTag";
import { loginData } from "../../states/LoginState";
import Pagination from "../Share/Pagination";

const Dummy = () => {
  const repeat = 3;
  return (
    <div aria-hidden="true">
      <div className="mb-3 hstack gap-1 placeholder-wave">
        <h2 className="d-inline-block placeholder col-1 bg-secondary" />
        <span className="fs-5 placeholder col-1 bg-primary" />
      </div>
      {[...Array(repeat)].map((e, index) => (
        <div className="mb-3 d-flex vstack gap-1 placeholder-wave placeholder-lg" key={index}>
          <hr />
          <h3 className="placeholder col-3 bg-secondary" />
          <div>
            <p className="placeholder col-11 bg-secondary" />
            <p className="placeholder col-12 bg-secondary" />
            <p className="placeholder col-8 bg-secondary" />
          </div>
          <span className="placeholder col-2 bg-secondary" />
        </div>
      ))}
    </div>
  );
};

const PostContainer = () => {
  const { openToast } = useToast();
  const params = useParams();

  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const userData = useRecoilValue(loginData);
  const [postList, setPostList] = useState<PostData[]>([]);
  const [postNum, setPostNum] = useState(0);
  const [isLastPost, setIsLastPost] = useState(false);
  const postIndex = useRef<QueryDocumentSnapshot<DocumentData>>();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (!params.userID) {
      navigate("/404");
      return;
    }
    getUserUID(params.userID)
      .then(async (uid) => {
        const count = await getUserPostNumber(uid);
        setPostNum(count);
        const { index: docIndex, data: docList } = await getUserPostList(uid);
        setPostList(docList);
        postIndex.current = docIndex;
        if (docList.length !== 10) setIsLastPost(true);
        else setIsLastPost(false);
      })
      .catch((error) => {
        console.log(error);
        openToast("Error", "Read post list failed.", "warning");
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPagination = async () => {
    const { userID } = params;
    if (!userID) return;
    const uid = await getUserUID(userID);
    const { index, data } = await getUserPostList(uid, postIndex.current);
    setPostList((prev) => [...prev, ...data]);
    postIndex.current = index;
    if (data.length !== 10) setIsLastPost(true);
  };

  const onClickWrite = () => navigate("/write");

  return (
    <section className="PostContainer px-md-3 my-4 mx-md-4">
      <MetaTag title={`${params.userID}'s Blog`} description={`Check the ${params.userID}'s blog posts`} />
      {isLoading ? <Dummy /> : null}
      <div className="PostHeader mb-3 hstack gap-1" hidden={isLoading}>
        <h2 className="fw-bold d-inline-block">Posts</h2>
        <span className="text-primary fs-5">{`(${String(postNum)})`}</span>
        {params.userID === userData.nickname ? (
          <button className="btn btn-outline-primary ms-auto" type="button" onClick={onClickWrite}>
            Write
          </button>
        ) : null}
      </div>
      <PostThumbnailBox postList={postList} />
      <Pagination
        isLastPost={isLastPost}
        postIndex={postIndex}
        callBack={onPagination}
        condition={() => !!params.userID}
      />
    </section>
  );
};
export default PostContainer;
