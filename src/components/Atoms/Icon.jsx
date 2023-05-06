import styled from "styled-components";

const IconStyled = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default function Icon({ children, size }) {
  return <IconStyled size={size}>{children}</IconStyled>;
}
