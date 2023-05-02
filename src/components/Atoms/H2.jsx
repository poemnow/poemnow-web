import styled from "styled-components";

const H2Styled = styled.h2`
	font-size: var(--h2);
`;

export default function H2({ children }) {
	return <H2Styled>{children}</H2Styled>;
}
