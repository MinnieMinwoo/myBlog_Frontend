/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserPostList } from "../logic/getSetPostInfo";
import { getUserUID } from "../logic/getSetUserInfo";
import { BlogContainer, FooterAlign } from "../styles/PageView";

import Header from "../components/Home/Header/Header";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";
import Footer from "../components/Share/Footer";

const Home = () => {
  const [postList, setPostList] = useState<PostData[]>([]);
  const params = useParams();

  useEffect(() => {
    if (!params.userID) throw console.log("no name data");
    getUserUID(params.userID)
      .then((uid) => {
        return getUserPostList(uid);
      })
      .then((docList) => {
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
        <Footer />
      </footer>
    </FooterAlign>
  );
};

export default Home;
