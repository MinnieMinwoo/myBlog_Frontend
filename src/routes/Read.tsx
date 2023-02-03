import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostData } from "../logic/getPostInfo";
import { BlogContainer } from "../styles/Blogview";

import Header from "../components/Home/Header/Header";
import PostTitle from "../components/Home/Section/PostTitle";
import PostDetail from "../components/Home/Section/PostDetail";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import HomeFooter from "../components/Home/Footer/Footer";

const Read = () => {
  const [value, setValue] = useState<PostDetail>();
  const param = useParams();

  useEffect(() => {
    if (typeof param.docID !== "string") return;
    getPostData(param.docID).then((postDetail) => {
      setValue(postDetail);
    });
  }, []);

  return (
    <div className="Home">
      <header className="home_header">
        <Header />
      </header>
      <section>
        <PostTitle />
        <BlogContainer>
          <PostDetail postData={value} />
          <CategorySideBar />
        </BlogContainer>
      </section>
      <footer className="home_footer">
        <HomeFooter />
      </footer>
    </div>
  );
};

export default Read;
