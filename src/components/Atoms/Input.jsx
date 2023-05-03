import React from "react";
import styled from "styled-components";

const InputStyle = styled.input``;

function Input({ type, placeholder }) {
  return <InputStyle type={type} placeholder={placeholder}></InputStyle>;
}

export default Input;
