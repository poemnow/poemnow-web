import styled from "styled-components";

const ButtonStyle = styled.button`
  white-space: nowrap;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
`;

export default function FitContentButton(props) {
  return (
    <ButtonStyle
      backgroundColor={props.backgroundColor}
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonStyle>
  );
}
