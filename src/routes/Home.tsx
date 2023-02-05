import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserPostList } from "../logic/getPostInfo";
import { BlogContainer, FooterAlign } from "../styles/PageView";

import Header from "../components/Home/Header/Header";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";
import HomeFooter from "../components/Share/Footer";

const Home = () => {
  const [postList, setPostList] = useState<PostData[]>([]);
  const params = useParams();

  useEffect(() => {
    if (!params.userID) throw console.log("do not have uid");
    getUserPostList(params?.userID).then((docList) => {
      setPostList(docList);
    });
  }, []);

  return (
    <FooterAlign className="Home">
      <header className="home_header">
        <Header />
      </header>
      <BlogContainer>
        <PostContainer postList={postList} types="posts" />
        <CategorySideBar />
      </BlogContainer>
      <footer className="home_footer">
        <HomeFooter />
      </footer>
    </FooterAlign>
  );
};

export default Home;
