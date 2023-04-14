import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { uuidv4 } from "@firebase/util";
import { getComments, updateComments } from "../../logic/getSetCommentInfo";
import CommentBox from "./CommentBox";
import { loginData } from "../../states/LoginState";
import CommentEdit from "./CommentEdit";
import { useToast } from "../../states/ToastState";

const CommentContainer = ({ postAuthor }: { postAuthor: string }) => {
  const params = useParams();
  const userData = useRecoilValue(loginData);
  const { openToast } = useToast();

  const [comments, setComments] = useState<CommentData[]>([]);
  useEffect(() => {
    if (!params.docID) return;
    getComments(params.docID).then((data) => {
      setComments(data);
    });
  }, [params.docID]);

  const commentUpload = async (id: string, newComments: CommentData[]) => {
    setComments(newComments);
    try {
      await updateComments(id, newComments);
    } catch (error) {
      console.log(error);
      openToast("Error", "Comment upload failed.", "warning");
    }
  };

  const onNewComment = async (value: string, index?: string) => {
    if (!userData.uid || !value || !params.docID) return;
    let commentData: CommentData = {
      index: uuidv4(),
      createAt: new Date().getTime(),
      createBy: userData.uid,
      nickName: userData.nickname ?? userData.uid,
      profileImage: userData.photoURL ?? "",
      isNested: index ? true : false,
      detail: value,
    };
    if (index) commentData.nestedTarget = index;
    const newComments = [...comments, commentData];
    await commentUpload(params.docID, newComments);
  };

  const onEditComment = async (value: string, target?: string) => {
    if (!userData.uid || !value || !params.docID) return;
    let newComments = [...comments];
    for (let comment of newComments) {
      if (comment.index === target) {
        comment.detail = value;
        await commentUpload(params.docID, newComments);
        break;
      }
    }
  };

  const onDeleteComment = async (target: string) => {
    if (!userData.uid || !params.docID) return;
    const newComments = comments.filter(
      (comment) => comment.index !== target && (!comment.nestedTarget || comment.nestedTarget !== target)
    );
    await commentUpload(params.docID, newComments);
  };

  return (
    <section className="CommentContainer">
      <h4 className="d-inline-flex">Comments</h4>
      <span className="text-primary">{` (${comments.length})`}</span>
      <hr className="mb-0" />
      {comments
        .filter((comment) => !comment.isNested)
        .map((comment) => (
          <CommentBox
            key={comment.index}
            comment={comment}
            reply={comments.filter((element) => element.nestedTarget === comment.index)}
            onNewReply={onNewComment}
            onEditComment={onEditComment}
            onDeleteComment={onDeleteComment}
            postAuthor={postAuthor}
          />
        ))}
      <div className="my-4">
        <CommentEdit title="New comment" text="" submitCallback={(data) => onNewComment(data)} />
        <hr className="mt-4" />
      </div>
    </section>
  );
};

export default CommentContainer;
