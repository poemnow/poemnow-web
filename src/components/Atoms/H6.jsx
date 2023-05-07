import styled from "styled-components";

const H6Styled = styled.h6`
  font-size: var(--mobile-h6-medium);
  color: ${(props) => props.color};
  word-break: break-all;
`;

export default function H6({ children, color }) {
  return <H6Styled color={color}>{children}</H6Styled>;
}
