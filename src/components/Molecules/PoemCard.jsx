import styled,{ css } from "styled-components";
import H5 from "../Atoms/H5";
import Icon from "../Atoms/Icon";
import Date from "../Atoms/Date";
import { useNavigate } from "react-router-dom";

const PoemCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const PoemCardLeftContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const HighlightedText = styled.span`
  color: #1F6313;
`;

const PoemCardTitle = styled(H5)`
  ${props =>
    props.highlight &&
    css`
      ${HighlightedText} {
        color: #1F6313;
      }
    `}
`;

const PoemCardContent = styled.div`
  color: var(--gray-700);
  font-size: 14px;
  height: 48px;
  line-height: 1.5;
  margin-top: 15px;

  ${props =>
    props.highlight &&
    css`
      ${HighlightedText} {
        color: #1F6313;
      }
    `}
`;


const PoemAuthorContent = styled.div`
  color: var(--gray-500);
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const PoemCommentCnt = styled.div`
  color: var(--gray-400);
  font-size: var(--mobile-label);
  margin-right: 16px;
  margin-left: 3px;
  white-space: nowrap;
  align-items: center;
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

const CommentLikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  
`;

const BlankSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 120px;
`;

function PoemCard({ poem, user, commentCnt, searchTerm }) {
  const { id, title, content, updatedAt, likeCnt } = poem.poem;
  const dateParts = updatedAt.split(" ")[0].split("-");
  const formattedDate = `${dateParts[0]}. ${dateParts[1]}. ${dateParts[2]}`;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/poemDetail/${id}`);
  };


  const writer = user.userNickname;
  // PoemCardList에서 위 객체들을 받음




  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <HighlightedText key={index}>{part}</HighlightedText>
      ) : (
        part
      )
    );
  };



  return (
    <PoemCardStyle onClick={handleCardClick}>
      <PoemCardLeftContainer>
      <PoemCardTitle highlight={searchTerm}>
            <span>{highlightText(title, searchTerm)}</span>
          </PoemCardTitle>
          <PoemCardContent highlight={searchTerm}>
            {highlightText(content, searchTerm)}
          </PoemCardContent>
        <PoemAuthorContent>작가 {writer}</PoemAuthorContent>
        <CommentLikeContainer>
          <HeartContainer>
            <Icon size="11px">
            <svg xmlns="http://www.w3.org/2000/svg"
            height="0.6em" viewBox="0 0 512 512">
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"/></svg>
            </Icon>
            <PoemCommentCnt>{commentCnt}</PoemCommentCnt>
            <Icon size="11px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="0.7em"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </Icon>
            <PoemCommentCnt>{likeCnt}</PoemCommentCnt>
            <BlankSpace></BlankSpace>
          </HeartContainer>
          <Date>발행일 {formattedDate}</Date>
        </CommentLikeContainer>
      </PoemCardLeftContainer>
    </PoemCardStyle>
  );
}

export default PoemCard;
