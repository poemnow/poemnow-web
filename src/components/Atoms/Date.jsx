import styled from "styled-components";

const DateStyled = styled.div`
	width: 200px;
	height: 50px;
	display: flex;
	justify-content: center;
	font-size: 16px;
	color: black;
	border-radius: 10px;
`;

function Date({ children }) {
	return <DateStyled>{children}</DateStyled>;
}

export default Date;
