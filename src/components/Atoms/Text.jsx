import styled from "styled-components";

const TextStyled = styled.text``;

export default function Text({ children }) {
	return <TextStyled>{children}</TextStyled>;
}
