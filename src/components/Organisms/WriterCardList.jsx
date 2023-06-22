import WriterCard from "../Molecules/WriterCard";
import styled from "styled-components";

const WriterCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

function WriterCardList({ users, keyword }) {
  return (
    <WriterCardListContainer>
      {users && users.map((user) => (
        
        <WriterCard key={user.id} user={user} 
        searchTerm={keyword}
        />
      ))}
    </WriterCardListContainer>
  );
}

export default WriterCardList;
