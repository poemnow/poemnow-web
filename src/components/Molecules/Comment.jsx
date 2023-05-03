import React, { useState } from "react";
import styled from "styled-components";
import ProfileImage from "../Atoms/ProfileImage";
import Icon from "../Atoms/Icon";

const CommentStyled = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
`;

const CommentContent = styled.p`
  margin: 10px 0;
`;

const Comment = ({ author, content, createdAt }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <CommentStyled>
      <span>
        <ProfileImage></ProfileImage>
      </span>
      <span>
        <CommentHeader>
          <CommentAuthor>{author}댓쓰니</CommentAuthor>
          <span>{createdAt}2023.05.01</span>
        </CommentHeader>
        <CommentContent>{content}댓글내용</CommentContent>
      </span>
      <span>
        <Icon
          children={
            <span
              onClick={() => setIsLiked(!isLiked)}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="50px"
                height="50px"
              >
                <path
                  fill={isLiked ? "red" : "none"}
                  stroke="red"
                  strokeWidth="25"
                  d="M416.5 64.5c-66.7 0-122.3 46.9-135.4 109.5c-13.1-62.6-68.7-109.5-135.4-109.5C47.9 64.5 0 112.4 0 174.4c0 57.2 31.7 107.2 77.9 133.7l170.7 132.8c10.7 8.3 25.7 8.3 36.4 0l170.7-132.8c46.3-26.5 77.9-76.5 77.9-133.7C512 112.4 464.1 64.5 416.5 64.5z"
                />
              </svg>
            </span>
          }
        ></Icon>
        <a href="/">수정 하기</a>
        <a href="/">삭제 하기</a>
      </span>
    </CommentStyled>
  );
};

export default Comment;
