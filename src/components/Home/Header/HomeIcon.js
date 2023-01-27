import styles from "./HomeIcon.module.css";
import HomeSearch from "./HomeSearch";
import HomeProfile from "./HomeProfile";

const HomeIcon = () => {
    return (
        <div className={`HomeIcon ${styles.HomeIcon}`}>
            <HomeSearch />
            <HomeProfile />
        </div>
    );
};

export default HomeIcon;
