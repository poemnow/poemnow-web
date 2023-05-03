import styled from "styled-components";

const LabelStyled = styled.label``;

export default function Label({ children }) {
  return <LabelStyled>{children}</LabelStyled>;
}
