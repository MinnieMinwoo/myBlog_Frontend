import React from "react";

import Header from "../components/Share/Header";
import Footer from "../components/Share/Footer";
import MainSection from "../components/Main/MainSection";

const Main = () => {
  return (
    <div
      className="Main d-flex flex-column min-vh-100 overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Main;
