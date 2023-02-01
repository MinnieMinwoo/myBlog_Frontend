import { Link } from "react-router-dom";
import getDate from "../../../getDate";
import styled from "styled-components";

const PostBox = styled(Link)`
    display: flex;
    margin-bottom: 28px;
    text-decoration-line: none;
`;

const Title = styled.p`
    cursor: pointer;
    margin-bottom: 9px;
    padding-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
    font-size: 18px;
    color: #555;
    ${PostBox}:hover & {
        text-decoration: underline;
    }
`;

const TextData = styled.p`
    cursor: pointer;
    color: #999;
    margin-bottom: 11px;
    max-height: 66px;
    display: -webkit-box; //수정필요
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 14px;
    line-height: 20px;
`;

const Date = styled.span`
    cursor: pointer;
    color: #999;
    font-size: 12px;
`;

const ImageData = styled.img`
    margin-left: 25px;
    width: 130px;
    height: 100%;
    object-fit: cover;
    border: 1px solid #f1f1f1;
    @media (max-width: 1079px) {
        width: 100px;
    }
`;

const PostItem = ({ postItem }) => {
    return (
        <PostBox className="PostItem" to={`/${postItem.id}`}>
            <div>
                <Title>{postItem.title}</Title>
                <TextData>{postItem.thumbnailData}</TextData>
                <Date>{getDate(postItem.createdAt)}</Date>
            </div>
            {postItem.thumbnailImageURL !== "" ? (
                <div>
                    <ImageData src={postItem.thumbnailImageURL} alt="post image" />
                </div>
            ) : null}
        </PostBox>
    );
};

export default PostItem;
