import React from "react";
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

interface Props {
    postList: PostData[];
    types: string;
}

const PostContainer = ({ postList, types }: Props) => {
    let title = "";
    switch (types) {
        case "posts":
            title = "Posts";
            break;
        case "search":
            title = "Results";
            break;
        default:
            break;
    }
    return (
        <PostArticle className="PostContainer">
            <PostHeader title={title} postNumber={postList.length} />
            <div className="PostItemList">
                {postList.map((post) => (
                    <PostItem key={post.createdAt} postItem={post} />
                ))}
            </div>
            <PostPagination />
        </PostArticle>
    );
};
export default PostContainer;
