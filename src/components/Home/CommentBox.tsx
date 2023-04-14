import React, { useState } from "react";
import altImage from "../../assets/images/altThumbnail.jpg";
import getDate from "../../logic/getDate";
import { useRecoilValue } from "recoil";
import { useModal } from "../../states/ModalState";
import { loginData } from "../../states/LoginState";
import CommentReplyBox from "./CommentReplyBox";
import CommentEdit from "./CommentEdit";

interface Props {
  comment: CommentData;
  reply: CommentData[];
  postAuthor: string;
  onNewReply: (value: string, index?: string) => void;
  onEditComment: (value: string, index?: string) => void;
  onDeleteComment: (target: string) => void;
}
const CommentBox = ({ comment, reply, postAuthor, onNewReply, onEditComment, onDeleteComment }: Props) => {
  const userData = useRecoilValue(loginData);
  const { openModal } = useModal();
  const onDelete = () => {
    const [title, content] = ["Warning", "If you really want to delete this comment?"];
    const callbackFunction = () => onDeleteComment(comment.index);
    openModal(title, content, callbackFunction, true, "danger");
  };

  const [showReplyBox, setShowReplyBox] = useState(false);
  const onReply = () => setShowReplyBox((prev) => !prev);

  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => setIsEdit((prev) => !prev);

  return (
    <div className="CommentBox mt-3">
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
        {!isEdit && userData.uid && comment.createBy === userData.uid ? (
          <>
            <span className="fs-14px text-777 pe-on" role="button" onClick={onEdit}>
              {" · Edit"}
            </span>
          </>
        ) : null}
        {!isEdit && userData.uid && [comment.createBy, postAuthor].includes(userData.uid) ? (
          <span className="fs-14px text-777 pe-on" role="button" onClick={onDelete}>
            {" · Delete "}
          </span>
        ) : null}
      </div>
      {isEdit ? (
        <div className="mt-3">
          <CommentEdit
            title="Edit comment"
            text={comment.detail}
            target={comment.index}
            closeCallback={onEdit}
            submitCallback={onEditComment}
          />
        </div>
      ) : (
        <>
          <p className="text-333 fs-5">{comment.detail}</p>
          {showReplyBox ? null : (
            <span className=" text-777 pe-on" onClick={onReply}>
              Reply
            </span>
          )}
        </>
      )}
      <hr className="mb-0" />
      {reply.map((data) => (
        <CommentReplyBox
          key={data.index}
          reply={data}
          postAuthor={postAuthor}
          commentAuthor={comment.createBy}
          onEditComment={onEditComment}
          onDeleteComment={onDeleteComment}
        />
      ))}
      {showReplyBox && (
        <div className="mt-3">
          <CommentEdit
            title="New reply"
            text=""
            target={comment.index}
            closeCallback={onReply}
            submitCallback={onNewReply}
          />
          <hr className="mt-4" />
        </div>
      )}
    </div>
  );
};

export default CommentBox;
