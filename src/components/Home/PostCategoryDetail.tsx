import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import { useToast } from "../../states/ToastState";

import { getUserUID } from "../../logic/getSetUserInfo";
import AlertToast from "../Share/Toast";
import { getPostListByCategory, getPostNumByCategory } from "../../logic/getSetPostInfo";
import { getCategoryThumbnail } from "../../logic/getSetCategoryInfo";
import PostThumbnailBox from "./PostThumbnailBox";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

const PostCategoryDetail = () => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const [imageURL, setImageURL] = useState("");
  const [postList, setPostList] = useState<PostData[]>([]);
  const [postNum, setPostNum] = useState(0);
  const { openToast } = useToast();
  const params = useParams();

  const [isPagination, setIsPagination] = useState(false);
  const [isLastPost, setIsLastPost] = useState(false);
  const postIndex = useRef<QueryDocumentSnapshot<DocumentData>>();
  const observeRef = useRef<HTMLDivElement>(null);

  const onPagination = async (entries: IntersectionObserverEntry[]) => {
    const { userID, mainName, subName } = params;
    if (!userID || !mainName || !subName) return;
    if (!entries[0].isIntersecting || !postIndex.current) return;
    if (isPagination || isLastPost) return;
    setIsPagination(true);
    const uid = await getUserUID(userID);
    const { index, data } = await getPostListByCategory(uid, mainName, subName, postIndex.current);
    setPostList((prev) => [...prev, ...data]);
    postIndex.current = index;
    if (data.length !== 10) setIsLastPost(true);
    setIsPagination(false);
  };

  const observer = new IntersectionObserver(onPagination, {
    rootMargin: "100px",
    threshold: 0.1,
  });

  useEffect(() => {
    setIsLoading(true);
    const { mainName, subName } = params;
    if (!(params.userID && mainName && subName)) throw console.log("no params");
    getUserUID(params.userID)
      .then(async (uid) => {
        await Promise.all([
          getCategoryThumbnail(uid, mainName, subName).then((url) => setImageURL(url)),
          getPostNumByCategory(uid, mainName, subName).then((postNum) => setPostNum(postNum)),
          getPostListByCategory(uid, mainName, subName).then(({ data, index }) => {
            setPostList(data);
            postIndex.current = index;
            if (data.length !== 10) setIsLastPost(true);
          }),
        ]);
      })
      .catch((error) => {
        console.log(error);
        openToast("Error", "Post loading failed.", "warning");
      })
      .finally(() => {
        observeRef.current && observer.observe(observeRef.current);
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AlertToast />
      <main className="read_section" hidden={isLoading}>
        <section
          className="bg-image w-100 bg-opacity-50 px-4 mb-4"
          style={{
            height: "340px",
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url(${imageURL}) no-repeat center / cover`,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <h2
            className="fs-1 fw-middle mb-3 text-white"
            style={{ paddingTop: "140px" }}
          >{`${params.mainName} - ${params.subName}`}</h2>
          <span className="fs-5 text-white">{`${postNum} ${
            postList.length && postList.length !== 1 ? "posts" : "post"
          }`}</span>
        </section>
        <PostThumbnailBox postList={postList} />
      </main>
      {isLastPost || isLoading ? null : (
        <div
          className="spinner-border text-secondary"
          style={{ marginLeft: "47%" }}
          ref={observeRef}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default PostCategoryDetail;
