import React, { useEffect, useState } from "react";
import { getComments } from "../../logic/getSetCommentInfo";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";

const CommentContainer = ({ postAuthor }: { postAuthor: string }) => {
  const params = useParams();
  const [comments, setComments] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    if (!params.docID) return;
    getComments(params.docID).then((data) => {
      console.log(data);
      setComments(data);
    });
  }, [params.docID]);

  return (
    <section>
      <h4 className="d-inline-flex">Comments</h4>
      <span className="text-primary">{` (${comments.length})`}</span>
      <hr />
      {comments
        .filter((comment) => !comment.isNested)
        .map((comment) => (
          <CommentBox
            comment={comment}
            reply={comments.filter((element) => element.nestedTarget === comment.index)}
            postAuthor={postAuthor}
          />
        ))}
      <section>
        <textarea
          className="form-control mt-5 mb-3 h-100px textarea-fixed"
          placeholder="Write your comment"
          aria-label="With textarea"
          maxLength={300}
        />
        <span className="text-555">{newComment.length} / 300</span>
        <button className="btn btn-primary float-end mb-4">Submit</button>
      </section>
    </section>
  );
};

export default CommentContainer;
