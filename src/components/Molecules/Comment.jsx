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
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentHeaderStart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const CommentHeaderEnd = styled.div``;

const CommentBody = styled.div`
  padding-right: 32px;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Comment = ({ author, content, createdAt, src }) => {
  return (
    <CommentContainer>
      <CommentHeader>
        <CommentHeaderStart>
          <ProfileImage src={src} size="35px" />
          <P>{author}</P>
        </CommentHeaderStart>
        <CommentHeaderEnd>
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
      </CommentHeader>
      <CommentBody>
        <P>{content}</P>
      </CommentBody>
      <CommentFooter>
        <Date>{createdAt}</Date>
        <Icon outSize="24px" inSize="16px">
          <svg
            stroke="red"
            fill="red"
            width="100%"
            height="100%"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="2"
              d="M128.00586,220a3.993,3.993,0,0,1-1.9541-.51,312.79378,312.79378,0,0,1-50.72168-37.01685C41.27344,151.82263,24.00586,121.38306,24.00586,92a56.013,56.013,0,0,1,104-28.87823A56.013,56.013,0,0,1,232.00586,92c0,29.38306-17.26758,59.82263-51.32422,90.47314A312.79378,312.79378,0,0,1,129.96,219.49,3.993,3.993,0,0,1,128.00586,220Zm-48-176a48.054,48.054,0,0,0-48,48c0,59.701,82.17578,111.14148,96,119.36853,13.82422-8.227,96-59.66754,96-119.36853a48.00892,48.00892,0,0,0-92.30957-18.49268,3.99954,3.99954,0,0,1-7.38086,0A47.90343,47.90343,0,0,0,80.00586,44Z"
            />
          </svg>
        </Icon>
      </CommentFooter>
    </CommentContainer>
  );
};

export default Comment;
