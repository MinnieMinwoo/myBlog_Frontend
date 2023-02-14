/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { FooterAlign } from "../styles/PageView";

import Header from "../components/Home/Header";
import Footer from "../components/Share/Footer";

const Home = () => {
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
        </Row>
      </section>
      <footer className="home_footer">
        <Footer />
      </footer>
    </FooterAlign>
  );
};

export default Home;
