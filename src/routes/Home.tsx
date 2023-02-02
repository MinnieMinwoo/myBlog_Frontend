import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbService } from "../firebase";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import styled from "styled-components";

import Header from "../components/Home/Header/Header";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";
import HomeFooter from "../components/Home/Footer/Footer";

const HomeContainer = styled.div`
    @media (min-width: 1080px) {
        display: flex;
        width: 80%;
        margin-left: 10%;
        justify-content: space-around;
    }
`;

const Home = () => {
    const [postList, setPostList] = useState<PostData[]>([]);
    const params = useParams();
    useEffect(() => {
        const q = query(
            collection(dbService, "posts"),
            where("createdBy", "==", params.userID),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const docList = snapshot.docs.map((doc) => ({
                id: doc.id,
                createdAt: doc.data().createdAt,
                createdBy: doc.data().createdBy,
                tag: doc.data().tag,
                thumbnailData: doc.data().thumbnailData,
                thumbnailImageURL: doc.data().thumbnailImageURL,
                title: doc.data().title,
            }));
            setPostList(docList);
        });
    }, []);
    return (
        <div className="Home">
            <header className="home_header">
                <Header />
            </header>
            <HomeContainer>
                <PostContainer postList={postList} types="posts" />
                <CategorySideBar />
            </HomeContainer>
            <footer className="home_footer">
                <HomeFooter />
            </footer>
        </div>
    );
};

export default Home;
