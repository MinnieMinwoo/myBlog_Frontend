/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../../states/LoadingState";

import { getUserPostNumber, getUserPostList } from "../../logic/getSetPostInfo";
import { getUserUID } from "../../logic/getSetUserInfo";
import { useToast } from "../../states/ToastState";
import PostThumbnailBox from "./PostThumbnailBox";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import "../../styles/PostContainer.css";

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
  const [postList, setPostList] = useState<PostData[]>([]);
  const [postNum, setPostNum] = useState(0);
  const [isLastPost, setIsLastPost] = useState(false);
  const postIndex = useRef<QueryDocumentSnapshot<DocumentData>>();

  useEffect(() => {
    setIsLoading(true);
    if (!params.userID) throw console.log("no params"); // todo: make 404 page
    getUserUID(params.userID)
      .then(async (uid) => {
        const count = await getUserPostNumber(uid);
        setPostNum(count);
        const { index: docIndex, data: docList } = await getUserPostList(uid);
        setPostList(docList);
        postIndex.current = docIndex;
        if (docList.length !== 10) setIsLastPost(true);
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

  const [isPagination, setIsPagination] = useState(false);
  const observeRef = useRef<HTMLDivElement>(null);

  const onPagination = async (entries: IntersectionObserverEntry[]) => {
    if (!entries[0].isIntersecting || !postIndex.current || !params.userID) return;
    if (isPagination || isLastPost) return;
    setIsPagination(true);
    const uid = await getUserUID(params.userID);
    const { index, data } = await getUserPostList(uid, postIndex.current);
    setPostList((prev) => [...prev, ...data]);
    postIndex.current = index;
    if (data.length !== 10) setIsLastPost(true);
    setIsPagination(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onPagination, {
      rootMargin: "100px",
      threshold: 0.1,
    });
    const currentRef = observeRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observeRef.current]);

  return (
    <section className="PostContainer px-md-3 my-4 mx-md-4">
      {isLoading ? <Dummy /> : null}
      <div className="PostHeader mb-3 hstack gap-1" hidden={isLoading}>
        <h2 className="fw-bold d-inline-block">Posts</h2>
        <span className="text-primary fs-5">{`(${String(postNum)})`}</span>
      </div>
      <PostThumbnailBox postList={postList} />
      {isLastPost || isLoading ? null : (
        <div className="page-spinner-center">
          <div className="spinner-border text-secondary" role="status" ref={observeRef}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </section>
  );
};
export default PostContainer;
