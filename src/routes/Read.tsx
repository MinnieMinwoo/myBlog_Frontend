import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostData } from "../logic/getPostInfo";
import { BlogContainer, FooterAlign } from "../styles/PageView";

import Header from "../components/Home/Header/Header";
import PostTitle from "../components/Home/Section/PostTitle";
import PostDetail from "../components/Home/Section/PostDetail";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import HomeFooter from "../components/Share/Footer";

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
    <FooterAlign className="Read">
      <header className="read_header">
        <Header />
      </header>
      <section className="read_section">
        <PostTitle
          title={value?.title}
          createdBy={value?.createdBy}
          createdAt={value?.createdAt}
        />
        <BlogContainer>
          <PostDetail postData={value} />
          <CategorySideBar />
        </BlogContainer>
      </section>
      <footer className="read_footer">
        <HomeFooter />
      </footer>
    </FooterAlign>
  );
};

export default Read;