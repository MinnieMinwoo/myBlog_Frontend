import styles from "./PostPagination.module.css";

const PostPagination = () => {
  const currentPageNumber = 1;
  return (
    <div className="PostPagination">
      <a className={styles.post_pagination_link} href={`/${currentPageNumber}`}>
        more
      </a>
    </div>
  );
};
export default PostPagination;
