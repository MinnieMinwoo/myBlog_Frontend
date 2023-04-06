import React from "react";
import altImage from "../../assets/images/altThumbnail.jpg";
import getDate from "../../logic/getDate";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";

interface Props {
  comment: CommentData;
  reply: CommentData[];
  postAuthor: string;
}
const CommentBox = ({ comment, reply, postAuthor }: Props) => {
  const userData = useRecoilValue(loginData);
  return (
    <div id={`${comment.index}`}>
      <div>
        <img
          src={`${comment.profileImage ? comment.profileImage : altImage}`}
          alt="Profile"
          className="w-50px h-50px-i img-thumbnail rounded-circle align-top me-2"
        />
        <div className="d-inline-block">
          <p className="mb-0 fs-5 fw-semibold text-333">{comment.nickName}</p>
          <p className="fs-14px text-555">{getDate(comment.createAt)}</p>
        </div>
        {userData.uid && [comment.createBy, postAuthor].includes(userData.uid) ? (
          <>
            <span className="fs-14px text-777 pe-on"> · Edit </span>
            <span className="fs-14px text-777 pe-on">· Delete </span>
          </>
        ) : null}
      </div>
      <p className="text-333 fs-5">{comment.detail}</p>
      <span className=" text-777 pe-on">Reply</span>
      <hr />
    </div>
  );
};

export default CommentBox;
