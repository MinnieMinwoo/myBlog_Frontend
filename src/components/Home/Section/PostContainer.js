import PostHeader from "./PostHeader";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";
import styles from "./PostContainer.module.css";

const PostContainer = () => {
  return (
    <article className={`PostContainer ${styles.PostContainer}`}>
      <PostHeader />
      <div className="PostItemList">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <PostPagination />
    </article>
  );
};
export default PostContainer;
