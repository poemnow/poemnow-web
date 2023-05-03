import styled from "styled-components";

const IconStyled = styled.div`
  width: 24px;
  height: 24px;
`;

export default function Icon({ children }) {
  return <IconStyled>{children}</IconStyled>;
}
