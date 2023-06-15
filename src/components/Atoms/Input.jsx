import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: ${(props) => props.border};
  box-sizing: border-box;
  ::placeholder {
    color: ${(props) => props.placeholderColor};
    font-size: 14px;
  }
  &:focus {
    border: 1px solid var(--primary2);
    outline: 1px solid var(--primary2);
  }
  padding: 12px 24px;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
`;

function Input({ props }) {
  return (
    <InputStyle
      {...props.register}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      placeholderColor={props.placeholderColor}
      minlength={props.minlength}
      maxlength={props.maxlength}
      name={props.name}
      className={props.className}
      autoComplete={props.autoComplete}
      onKeyDown={props.onKeyDown}
      value={props.value}
      onChange={props.onChange}
      border={props.border}
      borderRadius={props.borderRadius}
      backgroundColor={props.backgroundColor}
    ></InputStyle>
  );
}

export default Input;
