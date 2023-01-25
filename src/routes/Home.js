import styles from "./Home.module.css";
import HomeHeader from "../components/Home/Header/HomeHeader";
import CategorySideBar from "../components/Home/Section/CategorySideBar";
import PostContainer from "../components/Home/Section/PostContainer";
import HomeFooter from "../components/Home/Footer/HomeFooter";

const Home = () => {
    return (
        <div className="Home">
            <header className="home_header">
                <HomeHeader />
            </header>
            <section className={`home_container ${styles.home_container}`}>
                <PostContainer />
                <CategorySideBar />
            </section>
            <footer className="home_footer">
                <HomeFooter />
            </footer>
        </div>
    );
};

export default Home;
