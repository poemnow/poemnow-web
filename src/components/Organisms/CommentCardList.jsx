import React from "react";
import CommentCard from "../Molecules/CommentCard";

const CommentCardList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          author={comment.author}
          createdAt={comment.createdAt}
        />
      ))}
    </div>
  );
};

export default CommentCardList;
