import styled from "styled-components";

const H3Styled = styled.h3`
  font-size: var(--mobile-h3);
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight === "bold" ? 700 : 500)};
`;

export default function H3({ children, color, weight }) {
  return (
    <H3Styled color={color} weight={weight}>
      {children}
    </H3Styled>
  );
}
