import PoemCard from "../Molecules/PoemCard";
import styled from "styled-components";

const PoemCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const PoemCardList = ({ poemList }) => {
  return (
    <PoemCardListContainer>
      {poemList &&
        poemList.map((poem) => (
          <PoemCard key={poem.id} poem={poem} user={poem.user} />
        ))}
    </PoemCardListContainer>
  );
};

export default PoemCardList;
