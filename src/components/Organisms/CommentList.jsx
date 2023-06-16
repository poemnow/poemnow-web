import React from "react";
import Comment from "../Molecules/Comment";
import styled from "styled-components";
import api from "../../utils/api";
import { useEffect, useState } from "react";

const CommentListContainer = styled.div`
  width: 358px;
`;

const CommentList = ({ comments }) => {
  const [commentStates, setCommentStates] = useState([]);

  useEffect(() => {
    const fetchCommentIds = async () => {
      try {
        const response = await api("comment-like/comment", "GET");
        const apiCommentIds = response.map((item) => item.comment_id);
        console.log(response);
        console.log(apiCommentIds);
        if (!apiCommentIds || apiCommentIds.length === 0) {
          console.log("No comment IDs found in the API response");
          return;
        }

        setCommentStates((prevStates) => {
          const newStates = comments.map(() => true);
          apiCommentIds.forEach((commentId) => {
            const index = comments.findIndex(
              (comment) => comment.id === commentId
            );
            if (index !== -1) {
              newStates[index] = false;
            }
          });
          return newStates;
        });
      } catch (error) {
        console.log("Error fetching comment IDs:", error);
      }
    };

    fetchCommentIds();
  }, [comments]);

  const handleHeartClick = (index, commentId) => {
    setCommentStates((prevStates) => {
      const newStates = [...prevStates];
      if (newStates[index]) {
        const requestBody = {
          commentId: commentId,
        };
        api("comment-like", "POST", requestBody);
      } else {
        // 현재 하트가 false인 경우: true로 변경
        api("comment-like/" + commentId, "DELETE");
      }
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const [commentDeleteStates, setCommentDeleteStates] = useState(
    Array(comments.length).fill(false)
  );

  const handleEclipseClick = (index, commentId) => {
    setCommentDeleteStates((prevStates) => {
      const newStates = [...prevStates];

      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const deleteClick = (commentId) => {
    api("comment/deleted/" + +commentId, "DELETE");
  };

  return (
    <CommentListContainer>
      {comments.map((comment, index) => (
        <Comment
          key={comment.id}
          author={comment.user_nickname}
          content={comment.content}
          createdAt={comment.createdAt}
          src={comment.profile_pic}
          isHeartClicked={commentStates[index]}
          onHeartClick={() => handleHeartClick(index, comment.id)}
          isDeleteClicked={commentDeleteStates[index]}
          onDeleteClick={() => handleEclipseClick(index, comment.id)}
          DeleteClick={() => deleteClick(comment.id)}
        />
      ))}
    </CommentListContainer>
  );
};

export default CommentList;
