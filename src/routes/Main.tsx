import React from "react";

import Header from "../components/Share/Header";
import Footer from "../components/Share/Footer";
import MainSection from "../components/Main/MainSection";
import MetaTag from "../components/Share/MetaTag";

const Main = () => {
  return (
    <div className="Main d-flex flex-column min-vh-100 overflow-x-hidden">
      <MetaTag title="myBlog" description="Make your own blog" />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Main;
