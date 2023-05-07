import styled from "styled-components";

const LabelStyled = styled.label`
  font-size: var(--mobile-label);
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight === light ? 300 : 500)};
`;

export default function Label({ children, color, weight }) {
  return (
    <LabelStyled color={color} weight={weight}>
      {children}
    </LabelStyled>
  );
}
