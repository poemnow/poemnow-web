import styled from "styled-components";

const LabelStyled = styled.label`
  font-size: 11px;
  color: ${(props) => props.color};
`;

export default function Label({ children, color }) {
  return <LabelStyled color={color}>{children}</LabelStyled>;
}
