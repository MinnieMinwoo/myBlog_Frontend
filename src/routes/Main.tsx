import React from "react";

import MainHeader from "../components/Main/MainHeader";
import Footer from "../components/Share/Footer";
import MainSection from "../components/Main/MainSection";

const Main = () => {
  return (
    <div
      className="Main d-flex flex-column min-vh-100 overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      <MainHeader />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Main;
