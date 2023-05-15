import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import PostThumbnailBox from "../components/Home/PostThumbnailBox";
import Footer from "../components/Share/Footer";
import Header from "../components/Share/Header";
import MetaTag from "../components/Share/MetaTag";
import Pagination from "../components/Share/Pagination";
import { getPostListByQuery } from "../logic/getSetPostInfo";
import { isLoadingData } from "../states/LoadingState";
import { useToast } from "../states/ToastState";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const [searchParams, setSearchParams] = useSearchParams();
  const { openToast } = useToast();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query) return;
    const user = searchParams.get("user") ?? "";
    setSearchParams({ query: query, user: user });
    getResults(query, user);
  };

  const [postList, setPostList] = useState<PostData[]>([]);
  const [isLastPost, setIsLastPost] = useState(true);
  const postIndex = useRef<QueryDocumentSnapshot<DocumentData>>();
  const getResults = async (query: string, user = "") => {
    setIsLoading(true);
    try {
      const { index, data } = await getPostListByQuery(query, user);
      console.log(index);
      if (data.length === 10) setIsLastPost(false);
      setPostList(data);
      postIndex.current = index;
    } catch (error) {
      console.log(error);
      openToast("error", "Something went wrong", "warning");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");
    setQuery(query ?? "");
    const user = searchParams.get("user") ?? "";
    if (query) getResults(query, user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPagination = async () => {
    try {
      const user = searchParams.get("user") ?? "";
      const { index, data } = await getPostListByQuery(query, user, postIndex.current);
      if (data.length !== 10) setIsLastPost(true);
      setPostList((prev) => [...prev, ...data]);
      postIndex.current = index;
    } catch (error) {
      console.log(error);
      openToast("error", "Something went wrong", "warning");
    }
  };

  return (
    <div className="Search d-flex flex-column min-vh-100 overflow-hidden">
      <MetaTag title="myBlog" description="Search user posts" />
      <Header title="Search" />
      <section className="flex-grow-1">
        <div className="row">
          <div className="col col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
            <form className="d-flex align-items-end mb-4" onSubmit={onSubmit}>
              <div className="flex-grow-1 me-3">
                <label className="form-label">
                  {searchParams.get("user") ? `Search ${searchParams.get("user")}'s posts` : "Search all posts"}
                </label>
                <input type="text" className="form-control" value={query} onChange={onChange} required />
              </div>
              {isLoading ? (
                <button className="btn btn-outline-success w-80px h-40px" type="submit" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
              ) : (
                <button type="submit" className="btn btn-outline-success w-80px h-40px">
                  Search
                </button>
              )}
            </form>
            {query && !postList.length && <h5>No posts.</h5>}
            <PostThumbnailBox postList={postList} />
            <Pagination isLastPost={isLastPost} postIndex={postIndex} callBack={onPagination} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Search;
