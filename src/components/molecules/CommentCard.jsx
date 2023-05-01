import styled from "styled-components";
import { Link } from "react-router-dom";

const CommentCardStyled = styled.div`
  display: flex;
  flex-direction: column;
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

const CommentCard = ({ author, createdAt }) => {
  return (
    <Link to="/">
      <CommentCardStyled>
        <CommentHeader>
          <CommentAuthor>by.{author}</CommentAuthor>
        </CommentHeader>
        <span>댓글 내용이 나와야 함</span>
        <span>{createdAt}</span>
      </CommentCardStyled>
    </Link>
  );
};

export default CommentCard;
