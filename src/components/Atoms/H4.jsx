import styled from "styled-components";

const H4Styled = styled.h4`
  font-size: var(--mobile-h4);
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight === "bold" ? 700 : 500)};
`;

export default function H4({ children, color, weight }) {
  return (
    <H4Styled color={color} weight={weight}>
      {children}
    </H4Styled>
  );
}
