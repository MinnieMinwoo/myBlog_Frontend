import React from "react";
import Header from "../components/Home/Header/Header";
import PostDetail from "../components/Home/Section/PostDetail";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import HomeFooter from "../components/Home/Footer/Footer";
import styled from "styled-components";

//중복!
const HomeContainer = styled.section`
    @media (min-width: 1080px) {
        display: flex;
        width: 80%;
        margin-left: 10%;
        justify-content: space-around;
    }
`;

const Read = () => {
    return (
        <div className="Home">
            <header className="home_header">
                <Header />
            </header>
            <HomeContainer>
                <PostDetail />
                <CategorySideBar />
            </HomeContainer>
            <footer className="home_footer">
                <HomeFooter />
            </footer>
        </div>
    );
};

export default Read;
