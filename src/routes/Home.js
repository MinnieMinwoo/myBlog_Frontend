import styles from "./Home.module.css";
import HomeHeader from "../components/Home/Header/HomeHeader";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";

const Home = () => {
  return (
    <>
      <header className="home_header">
        <HomeHeader />
      </header>
      <section className={`home_container ${styles.home_container}`}>
        <PostContainer />
        <CategorySideBar />
      </section>
    </>
  );
};

export default Home;
