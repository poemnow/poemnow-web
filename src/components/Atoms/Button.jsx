import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100%;
  white-space: nowrap;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export default function Button(props) {
  return (
    <ButtonStyle
      backgroundColor={props.backgroundColor}
      color={props.color}
      onClick={props.onClick}
      radius={props.radius}
      padding={props.padding}
      margin={props.margin}
    >
      {props.children}
    </ButtonStyle>
  );
}
