import styled from "styled-components";
import { Link } from "react-router-dom";
import Text from "../Atoms/Text";
import Date from "../Atoms/Date";
import P from "../Atoms/P";
import H5 from "../Atoms/H5";

const CommentCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid var(--gray-100);
`;

const CommentHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const CommentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
`;

const CommentBody = styled.div`
  color: var(--gray-900);
`;

const PoemTitle = styled.span`
  color: var(--gray-700);
  font-size: var(--mobile-h5);
`;

const PoemAuthor = styled.span`
  color: var(--gray-500);
  font-size: var(--mobile-h6);
`;

const CommentCard = ({ title, author, content, createdAt, poemUrl }) => {
  return (
    // <Link to={poemUrl}>
    <CommentCardStyled>
      <CommentHeaderContainer>
        <CommentHeader>
          <PoemTitle>{title}</PoemTitle>
          <PoemAuthor>by.{author}</PoemAuthor>
        </CommentHeader>
      </CommentHeaderContainer>
      <CommentBody>
        <H5>{content}</H5>
      </CommentBody>
      <div>
        <Date>{createdAt}</Date>
      </div>
    </CommentCardStyled>
    // </Link>
  );
};

export default CommentCard;
