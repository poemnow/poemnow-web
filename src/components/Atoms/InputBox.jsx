import styled from "styled-components";

const InputBoxStyled = styled.textarea`
  width: 100%;
  border-radius: none;
  border: none;
  outline: none;
  height: 400px;
  font-size: var(--mobile-p);
  font-family: "Pretendard";
  resize: none;
`;

export default function InputBox(props) {
  return <InputBoxStyled placeholder={props.placeholder}></InputBoxStyled>;
}