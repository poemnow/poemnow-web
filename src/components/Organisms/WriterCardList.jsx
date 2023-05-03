import WriterCard from "../Molecules/WriterCard";
import styled from "styled-components";

const WriterCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

function WriterCardList({ users }) {
  return (
    <WriterCardListContainer>
      {users.map((user) => (
        <WriterCard key={user.id} user={user} />
      ))}
    </WriterCardListContainer>
  );
}

export default WriterCardList;
