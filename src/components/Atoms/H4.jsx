import styled from "styled-components";

const H4Styled = styled.h4`
  font-size: var(--mobile-h4-medium);
  color: ${(props) => props.color};
`;

export default function H4({ children, color }) {
  return <H4Styled color={color}>{children}</H4Styled>;
}
