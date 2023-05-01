import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import "../../styles/Pagination.css";

interface Props {
  isLastPost: boolean;
  postIndex: React.MutableRefObject<QueryDocumentSnapshot<DocumentData> | undefined>;
  callBack: () => Promise<void>;
  condition?: () => boolean;
}

const Pagination = ({ isLastPost, postIndex, callBack, condition }: Props) => {
  const [isPagination, setIsPagination] = useState(false);
  const isLoading = useRecoilValue(isLoadingData);
  const observeRef = useRef<HTMLDivElement>(null);
  const onPagination = async (entries: IntersectionObserverEntry[]) => {
    if (!entries[0].isIntersecting || !postIndex?.current) return;
    if (isPagination || isLastPost) return;
    if (condition && !condition()) return;
    setIsPagination(true);
    try {
      await callBack();
    } catch (error) {
      throw error;
    } finally {
      setIsPagination(false);
    }
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
    /*
      스크롤을 내리면 currentRef가 null이 되는데 이상태에서 page를 옮겨도 Ref렌더링은 그대로기때문에 ObserveRef만있으면 페이지네이션이 씹히게 됨
      그래서 isLastPost값을 감지해 페이지 이동시 스크롤을 다 내려서 ref가 null인 상태에서 다시 observer를 구독시켜주어야함
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observeRef.current, isLastPost]);

  return (
    <>
      {isLastPost || isLoading ? null : (
        <div className="Pagination page-spinner-center mb-4">
          <div className="spinner-border text-secondary" role="status" ref={observeRef}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
