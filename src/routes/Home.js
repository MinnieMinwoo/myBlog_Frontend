import HomeHeader from "../components/Home/Header/HomeHeader";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";
import HomeFooter from "../components/Home/Footer/HomeFooter";
import { useEffect, useState } from "react";
import { dbService } from "../firebase";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";
import styled from "styled-components";

const HomeContainer = styled.div`
    @media (min-width: 1080px) {
        display: flex;
        width: 80%;
        margin-left: 10%;
        justify-content: space-around;
    }
`;

const Home = () => {
    const userData = useRecoilValue(loginData);
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        const q = query(
            collection(dbService, "posts"),
            where("createdBy", "==", userData.uid),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const docList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPostList(docList);
        });
    }, []);
    return (
        <div className="Home">
            <header className="home_header">
                <HomeHeader />
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
