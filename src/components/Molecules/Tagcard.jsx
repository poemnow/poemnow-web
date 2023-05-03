import styled from "styled-components";
import H2 from "../Atoms/H3";
import H6 from "../Atoms/H6";

const ATag = styled.a`
  color: black;
  text-decoration: none;
`;

const MiniContainer = styled.div`
  color: #7e7e7e;
`;

export default function TagCard({ text, count }) {
  return (
    <>
      <div>
        <ATag href={"search/tag/detail?keyword=" + text}>
          <H2 children={"# " + text}></H2>
        </ATag>
      </div>
      <MiniContainer>
        {count <= 1000 ? (
          <H6 children={"시 " + count + " 편"}></H6>
        ) : (
          <H6 children={"시 " + count + "+ 편"}></H6>
        )}
      </MiniContainer>
    </>
  );
}
