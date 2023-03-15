import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import { Stack, Image } from "react-bootstrap";
import styled from "styled-components";

import getDate from "../../logic/getDate";

const Preview = styled.div`
  width: 100%;
  &&:hover {
    h3 {
      text-decoration: underline;
    }
  }
  a {
    padding: 30px 0;
    border-top: 1px solid #eee;
    display: flex;
    text-decoration-line: none;
  }
  h3 {
    cursor: pointer;
    overflow: hidden;
    color: #111;
    font-weight: 600;
  }
  img {
    width: 100%;
    margin-bottom: 15px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center center;
  }
  p {
    word-break: break-all;
    cursor: pointer;
    color: #555;
  }
  span {
    cursor: pointer;
    color: #999;
    font-size: 14px;
  }
`;

const PostThumbnailBox = ({ postList }: { postList: PostData[] }) => {
  const param = useParams();
  const isLoading = useRecoilValue(isLoadingData);
  return (
    <article className="PostItemList" hidden={isLoading}>
      <Stack>
        {postList.map((post) => (
          <Preview key={post.id}>
            <Link className="PostItem" key={post.id} to={`/home/${param.userID}/${post.id}`}>
              <Stack gap={1}>
                {post.thumbnailImageURL !== "" ? (
                  <div>
                    <Image fluid={true} src={post.thumbnailImageURL} alt="post" />
                  </div>
                ) : null}
                <h3>{post.title}</h3>
                <p>{post.thumbnailData}</p>
                <span>{getDate(post.createdAt)}</span>
              </Stack>
            </Link>
          </Preview>
        ))}
      </Stack>
    </article>
  );
};

export default PostThumbnailBox;
