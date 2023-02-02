import React from "react";
import Header from "../components/Home/Header/Header";
import PostContainer from "../components/Home/Section/PostContainer";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import HomeFooter from "../components/Home/Footer/Footer";

const Read = () => {
    return (
        <div className="Home">
            <header className="home_header">
                <Header />
            </header>
            <div>
                <div />
                <CategorySideBar />
            </div>
            <footer className="home_footer">
                <HomeFooter />
            </footer>
        </div>
    );
};

export default Read;
