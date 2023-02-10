/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostData } from "../logic/getSetPostInfo";
import { BlogContainer, FooterAlign } from "../styles/PageView";

import Header from "../components/Home/Header/Header";
import PostTitle from "../components/Home/Section/PostTitle";
import PostDetail from "../components/Home/Section/PostDetail";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import Footer from "../components/Share/Footer";

const Read = () => {
  const [value, setValue] = useState<PostDetail>();
  const param = useParams();

  useEffect(() => {
    if (!param.docID) throw console.log("wrong url data");
    const docID = param.docID;
    getPostData(docID).then((postDetail) => {
      setValue(postDetail);
    });
  }, []);

  return (
    <FooterAlign className="Read">
      <header className="read_header">
        <Header />
      </header>
      <section className="read_section">
        <PostTitle postData={value} nickname={value?.nickname ?? ""} />
        <BlogContainer>
          <PostDetail postData={value} />
          <CategorySideBar />
        </BlogContainer>
      </section>
      <footer className="read_footer">
        <Footer />
      </footer>
    </FooterAlign>
  );
};

export default Read;
