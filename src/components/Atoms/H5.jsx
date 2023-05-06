import styled from "styled-components";

const H5Styled = styled.h5`
  font-size: var(--mobile-h5-medium);
  color: ${(props) => props.color};
`;

export default function H5({ children, color }) {
  return <H5Styled color={color}>{children}</H5Styled>;
}
