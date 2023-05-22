/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import { useToast } from "../../states/ToastState";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getPostListByCategory, getPostNumByCategory } from "../../logic/getSetPostInfo";
import { getCategoryThumbnail } from "../../logic/getSetCategoryInfo";
import PostThumbnailBox from "./PostThumbnailBox";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import altImage from "../../assets/images/altThumbnail.jpg";
import MetaTag from "../Share/MetaTag";
import Pagination from "../Share/Pagination";

const Dummy = () => {
  const repeat = 3;
  return (
    <div aria-hidden="true">
      <section className="w-100 bg-secondary px-4 mb-4 h-340px">
        <div className="pt-140px">
          <h2 className="placeholder d-block col-5" />
          <p className="placeholder col-4" />
        </div>
      </section>
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

const PostCategoryDetail = () => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const [imageURL, setImageURL] = useState("");
  const [postList, setPostList] = useState<PostData[]>([]);
  const [postNum, setPostNum] = useState(0);
  const { openToast } = useToast();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const { mainName, subName } = params;
    if (!(params.userID && mainName && subName)) {
      navigate("/404");
      return;
    }
    getUserUID(params.userID)
      .then(async (uid) => {
        await Promise.all([
          getCategoryThumbnail(uid, mainName, subName).then((url) => setImageURL(url)),
          getPostNumByCategory(uid, mainName, subName).then((postNum) => setPostNum(postNum)),
          getPostListByCategory(uid, mainName, subName).then(({ data, index }) => {
            setPostList(data);
            postIndex.current = index;
            if (data.length !== 10) setIsLastPost(true);
            else setIsLastPost(false);
          }),
        ]);
      })
      .catch((error) => {
        console.log(error);
        openToast("Error", "Post loading failed.", "warning");
      })
      .finally(() => {
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const [isLastPost, setIsLastPost] = useState(false);
  const postIndex = useRef<QueryDocumentSnapshot<DocumentData>>();

  const onPagination = async () => {
    const { userID, mainName, subName } = params;
    if (!userID || !mainName || !subName) return;
    const uid = await getUserUID(userID);
    const { index, data } = await getPostListByCategory(uid, mainName, subName, postIndex.current);
    setPostList((prev) => [...prev, ...data]);
    postIndex.current = index;
    if (data.length !== 10) setIsLastPost(true);
  };

  const paginationCondition = () => {
    const { userID, mainName, subName } = params;
    if (!userID || !mainName || !subName) return false;
    else return true;
  };

  return (
    <>
      {isLoading ? (
        <Dummy />
      ) : (
        <>
          <main className="read_section mb-4" hidden={isLoading}>
            <MetaTag title={`${params.userID}'s Blog`} description={`Check the ${params.userID}'s blog posts`} />
            <section
              className="bg-image w-100 bg-opacity-50 px-4 mb-4 h-340px text-eee"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${!!imageURL ? imageURL : altImage}) center/cover no-repeat`,
              }}
            >
              <h2 className="fs-1 fw-middle mb-3 pt-140px text-white">{`${params.mainName} - ${params.subName}`}</h2>
              <span className="fs-5 text-white">{`${postNum} ${
                postList.length && postList.length !== 1 ? "posts" : "post"
              }`}</span>
            </section>

            <PostThumbnailBox postList={postList} />
            <Pagination
              isLastPost={isLastPost}
              postIndex={postIndex}
              callBack={onPagination}
              condition={paginationCondition}
            />
          </main>
        </>
      )}
    </>
  );
};

export default PostCategoryDetail;

/*
<>
          
*/
