import styled from "styled-components";

const InputBoxStyled = styled.textarea`
  width: 100%;
  border-radius: none;
  border: none;
`;

export default function InputBox(props) {
  return <InputBoxStyled placeholder={props.placeholder}></InputBoxStyled>;
}
