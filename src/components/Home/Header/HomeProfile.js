import styles from "./HomeProfile.module.css";

const HomeProfile = () => {
    return (
        <div className={`HomeProfile ${styles.HomeProfile}`}>
            <button className={styles.profile_button} />
            <ul hidden>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default HomeProfile;
