import HomeHeader from "../components/Home/Header/HomeHeader";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";
import HomeFooter from "../components/Home/Footer/HomeFooter";
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
  return (
    <div className="Home">
      <header className="home_header">
        <HomeHeader />
      </header>
      <HomeContainer>
        <PostContainer />
        <CategorySideBar />
      </HomeContainer>
      <footer className="home_footer">
        <HomeFooter />
      </footer>
    </div>
  );
};

export default Home;
