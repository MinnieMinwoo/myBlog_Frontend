import PostHeader from "./PostHeader";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";
import styles from "./PostContainer.module.css";

function PostContainer() {
    return (
        <section className={`PostContainer ${styles.PostContainer}`}>
            <PostHeader />
            <div className="PostItemList">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
            <PostPagination />
        </section>
    );
}
export default PostContainer;
