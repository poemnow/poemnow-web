import styled from "styled-components";

const H2Styled = styled.h2`
  font-size: var(--mobile-h2);
  color: ${(props) => props.color};
`;

export default function H2({ children, color }) {
  return <H2Styled color={color}>{children}</H2Styled>;
}
