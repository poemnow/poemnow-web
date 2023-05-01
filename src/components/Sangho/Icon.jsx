import styled from "styled-components";

const IconStyled = styled.div`
	width: 32px;
	height: 32px;
`;

export default function Icon({ children }) {
	return <IconStyled>{children}</IconStyled>;
}
