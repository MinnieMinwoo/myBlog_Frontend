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

const Dummy = () => {
  const repeat = 3;
  return (
    <div aria-hidden="true">
      <section
        className="w-100 bg-secondary px-4 mb-4"
        style={{
          height: "340px",
        }}
      >
        <div style={{ paddingTop: "140px" }}>
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
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onPagination, {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    });
    observeRef.current && observer.observe(observeRef.current);
    return () => {
      observeRef.current && observer.unobserve(observeRef.current);
    };
  }, [observeRef.current]);

  return (
    <>
      <AlertToast />
      {isLoading ? (
        <Dummy />
      ) : (
        <>
          <main className="read_section" hidden={isLoading}>
            <section
              className="bg-image w-100 bg-opacity-50 px-4 mb-4"
              style={{
                height: "340px",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url(${imageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
          <div
            id="pagination"
            className="spinner-border text-secondary"
            style={{ marginLeft: "47%", display: `${isLastPost || isLoading ? "none" : "block"}` }}
            ref={observeRef}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      )}
    </>
  );
};

export default PostCategoryDetail;

/*
<>
          
*/
