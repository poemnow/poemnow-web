import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
`;

export default function Button(props) {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
}
