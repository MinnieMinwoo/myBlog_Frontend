import PostHeader from "./PostHeader";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";
import styled from "styled-components";

const PostArticle = styled.article`
  padding: 30px 0;
  @media (min-width: 1080px) {
    padding: 72px 50px 60px 0;
    flex-grow: 3;
  }
`;

const PostContainer = () => {
  return (
    <PostArticle className="PostContainer">
      <PostHeader />
      <div className="PostItemList">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <PostPagination />
    </PostArticle>
  );
};
export default PostContainer;
