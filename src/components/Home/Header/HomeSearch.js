import styles from "./HomeSearch.module.css";

const HomeSearch = () => {
    return (
        <div className={`HomeSearch ${styles.HomeSearch}`}>
            <button className={styles.search_button} />
        </div>
    );
};

export default HomeSearch;
