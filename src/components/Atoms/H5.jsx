import styled from "styled-components";

const H5Styled = styled.h5`
  font-size: var(--mobile-h5);
  color: ${(props) => props.color};
  font-weight: ${(props) =>
    props.weight === "bold" ? 700 : props.weight === "light" ? 300 : 500};
`;

export default function H5({ children, color, weight }) {
  return (
    <H5Styled color={color} weight={weight}>
      {children}
    </H5Styled>
  );
}
