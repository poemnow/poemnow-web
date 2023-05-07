import styled from "styled-components";

const DateStyled = styled.div`
  width: 100%;
  font-size: 11px;
  color: var(--gray-400);
  display: flex;
  align-items: center;
`;

function Date({ children }) {
  return <DateStyled>{children}</DateStyled>;
}

export default Date;
