import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { uuidv4 } from "@firebase/util";
import { getComments, updateComments } from "../../logic/getSetCommentInfo";
import CommentBox from "./CommentBox";
import { loginData } from "../../states/LoginState";
import CommentEdit from "./CommentEdit";

const CommentContainer = ({ postAuthor }: { postAuthor: string }) => {
  const params = useParams();
  const [comments, setComments] = useState<CommentData[]>([]);
  const userData = useRecoilValue(loginData);
  useEffect(() => {
    if (!params.docID) return;
    getComments(params.docID).then((data) => {
      setComments(data);
    });
  }, [params.docID]);

  const onNewComment = (value: string, index?: string) => {
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
    setComments(newComments);
    updateComments(params.docID, newComments);
  };

  const onEditComment = (value: string, target?: string) => {
    if (!userData.uid || !value || !params.docID) return;
    let newComments = [...comments];
    let index = -1;
    for (let i = 0; i < newComments.length; i++) {
      if (newComments[i].index === target) {
        index = i;
        break;
      }
    }
    if (index === -1) return;
    newComments[index].detail = value;
    setComments(newComments);
    updateComments(params.docID, newComments);
  };

  const onDeleteComment = (target: string) => {
    if (!userData.uid || !params.docID) return;
    const newComments = comments.filter(
      (comment) =>
        comment.index !== target && (!comment.nestedTarget || comment.nestedTarget !== target)
    );
    setComments(newComments);
    updateComments(params.docID, newComments);
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
