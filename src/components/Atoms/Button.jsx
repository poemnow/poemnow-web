import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 32px;
  height: 32px;
`;

export default function Button(props) {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
}
