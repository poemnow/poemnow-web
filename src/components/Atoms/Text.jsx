import styled from "styled-components";

const TextStyled = styled.text`
  font-size: var(--mobile-text);
  color: ${(props) => props.color};
`;

export default function Text({ children, color }) {
  return <TextStyled color={color}>{children}</TextStyled>;
}
