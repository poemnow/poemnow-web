import styled from "styled-components";

const TextStyled = styled.input`
  font-size: var(--mobile-text);
  color: ${(props) => props.color};
`;

export default function Text({ children, color }) {
  return (
    <TextStyled type="text" color={color}>
      {children}
    </TextStyled>
  );
}
