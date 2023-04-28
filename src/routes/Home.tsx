/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { getUserUID } from "../logic/getSetUserInfo";
import { getCategoryList } from "../logic/getSetCategoryInfo";

import Header from "../components/Share/Header";
import HeaderProfile from "../components/Home/HeaderProfile";
import Footer from "../components/Share/Footer";
import CategorySideBar from "../components/Home/CategorySideBar";
import MetaTag from "../components/Share/MetaTag";
import HeaderSearch from "../components/Home/HeaderSearch";

const Home = () => {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.userID) {
      navigate("/404");
      return;
    }
    getUserUID(params.userID)
      .then((uid) => {
        return getCategoryList(uid);
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  return (
    <div className="Home d-flex flex-column min-vh-100 overflow-hidden">
      <MetaTag title={`${params.userID}'s Blog`} description={`Check the ${params.userID}'s blog posts`} />
      <Header
        title={`${params.userID}'s Blog`}
        userName={params.userID}
        outlet={
          <div>
            <HeaderSearch />
            <HeaderProfile />
          </div>
        }
      />
      <section className="home_section flex-grow-1">
        <div className="row">
          <div className="col col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
            <Outlet context={[categoryList, setCategoryList]} />
          </div>
          <div className="col">
            {params["docID"] ? null : <CategorySideBar categoryList={categoryList} setCategoryList={setCategoryList} />}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
