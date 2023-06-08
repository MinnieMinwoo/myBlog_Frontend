import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoadingData } from "../../states/LoadingState";

import getDate from "../../logic/getDate";
import { getUserNickname } from "../../logic/getSetUserInfo";

const PostThumbnailBox = ({ postList }: { postList: PostData[] }) => {
  const param = useParams();
  const navigate = useNavigate();
  const isLoading = useRecoilValue(isLoadingData);
  const onTagSearch = (event: React.MouseEvent<HTMLButtonElement>, data: string) => {
    event.preventDefault();
    const {
      currentTarget: { innerText },
    } = event;
    navigate(`/search?query=${innerText}`);
  };
  return (
    <article className="PostItemList vstack" hidden={isLoading}>
      {postList.map((post) => (
        <div className="w-100" key={post.id}>
          <Link
            className="PostItem px-0 py-4 d-flex text-decoration-none bt-light"
            key={post.id}
            to={`/home/${param.userID}/${post.id}`}
            onClick={() => console.log("test")}
          >
            <div className="vstack gap-1">
              {post.thumbnailImageURL !== "" ? (
                <div className="w-100 ratio ratio-16x9 mb-3">
                  <img className="img-fluid object-fit-cover" src={post.thumbnailImageURL} alt="post" />
                </div>
              ) : null}
              <h3 className="overflow-hidden fw-semibold text-111">{post.title}</h3>
              <p className="mb-1 text-break text-555">{post.thumbnailData}</p>
              <div className="col">
                {post.tag.map((tag) => (
                  <button
                    key={tag}
                    className="btn btn-outline-primary me-1"
                    onClick={(event) => onTagSearch(event, tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <span className="fs-14px text-999">{getDate(post.createdAt)}</span>
            </div>
          </Link>
        </div>
      ))}
    </article>
  );
};

export default PostThumbnailBox;
