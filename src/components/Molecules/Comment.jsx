import React, { useState } from "react";
import styled from "styled-components";
import ProfileImage from "../Atoms/ProfileImage";
import Icon from "../Atoms/Icon";
import H5 from "../Atoms/H5";
import Date from "../Atoms/Date";
import P from "../Atoms/P";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 16px;
  background-color: var(--gray-50);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
`;

const CommentHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Author = styled.p`
  color: var(--gray-700);
  font-size: var(--mobile-p-bold);
`;
const Content = styled.p`
  font-size: var(--mobile-p);
`;

const CommentHeaderStart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const CommentHeaderEnd = styled.div`
  cursor: pointer;
`;

const CommentBody = styled.div`
  padding-right: 32px;
`;

const CommentHearts = styled.div`
  cursor: pointer;
`;
const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DeleteBtn = styled.button`
  width: 58px;
  position: absolute;
  right: 16px;
  bottom: 4px;
  /* padding: 8px 16px; */
  border: none;
  background: none;
  color: red;
  cursor: pointer;
  font-size: 8px;
`;

const Comment = ({
  author,
  content,
  createdAt,
  src,
  isHeartClicked,
  onHeartClick,
  isDeleteClicked,
  onDeleteClick,
  DeleteClick,
}) => {
  return (
    <CommentContainer>
      <CommentHeader>
        <CommentHeaderStart>
          <ProfileImage src={src} size="24px" />
          <Author>{author}</Author>
        </CommentHeaderStart>
        <CommentHeaderEnd onClick={onDeleteClick}>
          <Icon outSize="24px" inSize="24px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
              width="100%"
              height="100%"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </Icon>
        </CommentHeaderEnd>
        {isDeleteClicked && (
          <DeleteBtn onClick={DeleteClick}>삭제하기</DeleteBtn>
        )}
      </CommentHeader>
      <CommentBody>
        <Content>{content}</Content>
      </CommentBody>
      <CommentFooter>
        <Date>{createdAt}</Date>
        <CommentHearts onClick={onHeartClick}>
          {isHeartClicked ? (
            <Icon outSize="24px" inSize="16px">
              <svg
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 512 512"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </Icon>
          ) : (
            <Icon outSize="24px" inSize="16px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 512 512"
                fill="red"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </Icon>
          )}
        </CommentHearts>
      </CommentFooter>
    </CommentContainer>
  );
};

export default Comment;
