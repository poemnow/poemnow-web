import styled from "styled-components";

const ErrorStyle = styled.div`
  color: red;
  width: 100%;
  font-size: 12px;
`;

export default function ErrorComponent({ message }) {
  return message ? <ErrorStyle>{message}</ErrorStyle> : null;
}
