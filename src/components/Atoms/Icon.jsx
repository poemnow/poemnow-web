import styled from "styled-components";

const IconContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconStyled = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default function Icon({ children, outSize, inSize }) {
  return (
    <IconContainer size={outSize}>
      <IconStyled size={inSize}>{children}</IconStyled>
    </IconContainer>
  );
}
