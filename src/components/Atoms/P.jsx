import styled from "styled-components";

const PStyled = styled.p`
  font-size: var(--mobile-p);
  color: ${(props) => props.color};
  font-weight: ${(props) =>
    props.weight === "bold" ? 700 : props.weight === "light" ? 300 : 500};
`;

export default function P({ children, color, weight }) {
  return (
    <PStyled color={color} weight={weight}>
      {children}
    </PStyled>
  );
}
