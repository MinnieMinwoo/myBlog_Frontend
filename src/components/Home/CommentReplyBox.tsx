import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import altImage from "../../assets/images/altThumbnail.jpg";
import getDate from "../../logic/getDate";
import { useModal } from "../../states/ModalState";
import CommentEdit from "./CommentEdit";

interface Props {
  reply: CommentData;
  postAuthor: string;
  commentAuthor: string;
  onEditComment: (value: string, index?: string) => void;
  onDeleteComment: (target: string) => void;
}

const CommentReplyBox = ({
  reply,
  postAuthor,
  commentAuthor,
  onEditComment,
  onDeleteComment,
}: Props) => {
  const userData = useRecoilValue(loginData);
  const { openModal } = useModal();
  const onDelete = () => {
    openModal(
      "Warning",
      "If you really want to delete this reply?",
      () => {
        onDeleteComment(reply.index);
      },
      true,
      "danger"
    );
  };

  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="ReplyBox bg-light">
      <div className="pt-3 ps-4">
        <div>
          <img
            src={`${reply.profileImage ? reply.profileImage : altImage}`}
            alt="Profile"
            className="w-50px h-50px-i img-thumbnail rounded-circle align-top me-2"
          />
          <div className="d-inline-block">
            <p className="mb-0 fs-5 fw-semibold text-333">{reply.nickName}</p>
            <p className="fs-14px text-555">{getDate(reply.createAt)}</p>
          </div>
          {!isEdit && userData.uid && reply.createBy === userData.uid ? (
            <>
              <span className="fs-14px text-777 pe-on" role="button" onClick={onEdit}>
                {"· Edit"}
              </span>
            </>
          ) : null}
          {!isEdit &&
          userData.uid &&
          [reply.createBy, postAuthor, commentAuthor].includes(userData.uid) ? (
            <span className="fs-14px text-777 pe-on" role="button" onClick={onDelete}>
              {" · Delete "}
            </span>
          ) : null}
        </div>
        {isEdit ? (
          <div className="mb-4">
            <CommentEdit
              title="Edit comment"
              text={reply.detail}
              target={reply.index}
              closeCallback={onEdit}
              submitCallback={onEditComment}
            />
          </div>
        ) : (
          <p className="text-333 fs-5">{reply.detail}</p>
        )}
      </div>
      <hr className="mb-0" />
    </div>
  );
};

export default CommentReplyBox;
