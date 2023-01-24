import HomeIcon from "./HomeIcon";
import HomeNavigation from "./HomeNavigation";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <div className={`HomeHeader ${styles.HomeHeader}`}>
      <div className={styles.home_top}>
        <h1 className={styles.home_title}>몰?루</h1>
        <HomeIcon />
      </div>
    </div>
  );
};

export default HomeHeader;
