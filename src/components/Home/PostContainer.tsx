/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../../states/LoadingState";

import { getUserPostList } from "../../logic/getSetPostInfo";
import { getUserUID } from "../../logic/getSetUserInfo";
import AlertToast from "../Share/Toast";
import { useToast } from "../../states/ToastState";
import PostThumbnailBox from "./PostThumbnailBox";

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
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const [postList, setPostList] = useState<PostData[]>([]);
  const { openToast } = useToast();
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!params.userID) throw console.log("no params");
    getUserUID(params.userID)
      .then((uid) => {
        return getUserPostList(uid);
      })
      .then((docList) => {
        setPostList(docList);
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

  let title = "Posts";

  return (
    <section className="PostContainer px-3 m-4">
      {isLoading ? <Dummy /> : null}
      <AlertToast />
      <div className="PostHeader mb-3 hstack gap-1" hidden={isLoading}>
        <h2 className="fw-bold d-inline-block">{title}</h2>
        <span className="text-primary fs-5">{`(${String(postList.length)})`}</span>
      </div>
      <PostThumbnailBox postList={postList} />
    </section>
  );
};
export default PostContainer;
