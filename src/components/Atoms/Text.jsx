import styled from "styled-components";

const TextStyled = styled.input`
  font-size: var(--mobile-text);
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight === "light" ? 300 : 500)};
`;

export default function Text({ children, color, weight }) {
  return (
    <TextStyled color={color} weight={weight}>
      {children}
    </TextStyled>
  );
}
