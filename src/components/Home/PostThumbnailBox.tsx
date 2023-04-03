import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoadingData } from "../../states/LoadingState";

import getDate from "../../logic/getDate";

const PostThumbnailBox = ({ postList }: { postList: PostData[] }) => {
  const param = useParams();
  const isLoading = useRecoilValue(isLoadingData);
  return (
    <article className="PostItemList vstack" hidden={isLoading}>
      {postList.map((post) => (
        <div className="w-100" key={post.id}>
          <Link
            className="PostItem px-0 py-4 d-flex text-decoration-none bt-light"
            key={post.id}
            to={`/home/${param.userID}/${post.id}`}
          >
            <div className="vstack gap-1">
              {post.thumbnailImageURL !== "" ? (
                <div>
                  <img
                    className="img-fluid w-100 mb-3 ratio ratio-16x9 object-fit-cover"
                    src={post.thumbnailImageURL}
                    alt="post"
                  />
                </div>
              ) : null}
              <h3 className="overflow-hidden fw-semibold text-111">{post.title}</h3>
              <p className="mb-1 text-break text-555">{post.thumbnailData}</p>
              <span className="fs-14px text-999">{getDate(post.createdAt)}</span>
            </div>
          </Link>
        </div>
      ))}
    </article>
  );
};

export default PostThumbnailBox;
