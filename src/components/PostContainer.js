import PostHeader from "./PostHeader";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";

function PostContainer() {
    return (
        <section className="PostContainer">
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
