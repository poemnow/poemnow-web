import PoemCard from "../Molecules/PoemCard";
import styled from "styled-components";

const PoemCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const PoemCardList = ({ poemList,keyword }) => {
  return (
    <PoemCardListContainer>
      {poemList &&
        poemList.map((content) => (
          <PoemCard
            key={content.poem.id}
            poem={content}
            user={content.writer}
            commentCnt={content.commentCnt}
            searchTerm={keyword}
          />
        ))}
    </PoemCardListContainer>
  );
};

export default PoemCardList;
