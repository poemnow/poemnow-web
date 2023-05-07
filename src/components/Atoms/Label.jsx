import styled from "styled-components";

const LabelStyled = styled.label`
<<<<<<< Updated upstream
  font-size: 11px;
  color: ${(props) => props.color};
`;

export default function Label({ children, color }) {
  return <LabelStyled color={color}>{children}</LabelStyled>;
=======
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
>>>>>>> Stashed changes
}
