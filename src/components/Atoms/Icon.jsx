import styled from "styled-components";

const IconStyled = styled.div`
	width: 24px;
	height: 24px;
	padding: ${({ theme }) => theme.padding.xs};
`;

export default function Icon({ children }) {
	return <IconStyled>{children}</IconStyled>;
}
