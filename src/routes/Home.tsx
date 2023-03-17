/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Outlet, useParams } from "react-router-dom";

import Header from "../components/Home/Header";
import Footer from "../components/Share/Footer";
import CategorySideBar from "../components/Home/CategorySideBar";

const Home = () => {
  const params = useParams();
  return (
    <div className="Home d-flex flex-column min-vh-100 overflow-hidden">
      <header className="home_header">
        <Header />
      </header>
      <section className="home_section flex-grow-1">
        <div className="row">
          <div className="col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
            <Outlet />
          </div>
          <div className="col">{params["docID"] ? null : <CategorySideBar />}</div>
        </div>
      </section>
      <footer className="home_footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
