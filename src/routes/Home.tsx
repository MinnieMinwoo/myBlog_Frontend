/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { FooterAlign } from "../styles/PageView";

import Header from "../components/Home/Header";
import Footer from "../components/Share/Footer";
import CategorySideBar from "../components/Home/CategorySideBar";

const Home = () => {
  const params = useParams();
  return (
    <FooterAlign className="Home">
      <header className="home_header">
        <Header />
      </header>
      <section className="home_section">
        <Row>
          <Col
            sm={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 2 }}
            xxl={{ span: 6, offset: 3 }}
          >
            <Outlet />
          </Col>
          <Col>{params["*"] ? null : <CategorySideBar />}</Col>
        </Row>
      </section>
      <footer className="home_footer">
        <Footer />
      </footer>
    </FooterAlign>
  );
};

export default Home;
