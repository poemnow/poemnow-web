import styled from "styled-components";

const H3Styled = styled.h3`
  font-size: var(--mobile-h3-medium);
  color: ${(props) => props.color};
`;

export default function H3({ children, color }) {
  return <H3Styled color={color}>{children}</H3Styled>;
}
