import styled from "styled-components";
import { Link } from "react-router-dom";
import Text from "../Sangho/Text";

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
          <CommentAuthor>시 제목 by.작가이름{author}</CommentAuthor>
        </CommentHeader>
        <div>
          <Text>댓글 내용이 나와야 함</Text>
        </div>
        <div>
          <Text>2023.05.01{createdAt}</Text>
        </div>
      </CommentCardStyled>
    </Link>
  );
};

export default CommentCard;
