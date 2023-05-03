import React from "react";
import Comment from "../molecules/Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
          createdAt={comment.createdAt}
        />
      ))}
    </div>
  );
};

export default CommentList;
