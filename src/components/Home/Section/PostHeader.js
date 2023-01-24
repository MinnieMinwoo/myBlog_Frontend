import styles from "./PostHeader.module.css";

const PostHeader = () => {
  const title = "전체 글";
  const postNumber = 123;
  return (
    <>
      <div className={`PostHeader ${styles.post_header}`}>
        <h1 className={styles.post_header_container}>
          <span className={styles.post_header_title}>{title}</span>
          <span className={styles.post_header_number}>
            {String(postNumber)}
          </span>
        </h1>
      </div>
    </>
  );
};
export default PostHeader;
