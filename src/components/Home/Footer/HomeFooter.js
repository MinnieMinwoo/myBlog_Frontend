import styles from "./HomeFooter.module.css";

const HoemeFooter = () => {
  return (
    <div className={`HomeFooter ${styles.HomeFooter}`}>
      <p className={styles.home_meta}> 2023 My own blog project</p>
      <p className={styles.home_copyright}> © Snowcat</p>
    </div>
  );
};

export default HoemeFooter;
