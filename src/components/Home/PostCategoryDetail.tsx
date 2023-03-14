import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import { useToast } from "../../states/ToastState";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import AlertToast from "../Share/Toast";
import { getPostListByCategory } from "../../logic/getSetPostInfo";
import { getCategoryThumbnail } from "../../logic/getSetCategoryInfo";

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
  h2 {
    padding-top: 140px;
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  span {
    font-size: 20px;
  }
`;

const PostCategoryDetail = () => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const [imageURL, setImageURL] = useState("");
  const [postList, setPostList] = useState<PostData[]>([]);
  const { openToast } = useToast();
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    const { mainName, subName } = params;
    if (!(params.userID && mainName && subName)) throw console.log("no params");
    getUserUID(params.userID)
      .then(async (uid) => {
        await Promise.all([
          getCategoryThumbnail(uid, mainName, subName).then((url) => setImageURL(url)),
          getPostListByCategory(uid, mainName, subName).then((docList) => setPostList(docList)),
        ]);
      })
      .catch((error) => {
        console.log(error);
        openToast("Error", "Post loading failed.", "warning");
      })
      .finally(() => setIsLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AlertToast />
      <main className="read_section" hidden={isLoading}>
        <PostTitleBackground imageLink={imageURL}>
          <h2>{`${params.mainName} - ${params.subName}`}</h2>
          <span>{`${postList.length} ${
            postList.length && postList.length !== 1 ? "posts" : "post"
          }`}</span>
        </PostTitleBackground>
      </main>
    </>
  );
};

export default PostCategoryDetail;
